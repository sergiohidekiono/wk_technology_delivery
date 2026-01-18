import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DeliveryService } from 'src/app/core/services/delivery.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { Deliverys } from 'src/app/shared/interfaces/deliverys.interface';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {
  form: FormGroup;
  today = new Date();
  deliveryId: string | null = null;
  statuses: any[] = [];
  view: boolean = false;

  constructor(
    form: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private deliveryService: DeliveryService,
    private toastService: ToastService,
  ) {
    this.form = form.group({
      cliente: ['', Validators.required],
      endereco: ['', Validators.required],
      dataEstimadaEntrega: ['', Validators.required],
      produto: ['', Validators.required],
      observacoes: [''],
      historico: [''],
      historicoPreview: [{ value: '', disabled: true }],
      status: [''],
    });
    this.today.setDate(this.today.getDate() + 1);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.view = params['view'] === 'true';
      this.deliveryId = params['id'];
      if (this.deliveryId) {
        this.statuses = this.deliveryService.getStatuses();
        this.deliveryService
          .getDeliveryById(this.deliveryId)
          .subscribe((res: any) => {
            const delivery = res[0];
            const date = new Date(delivery.dataEstimadaEntrega);
            const auxHistorico = delivery?.historico;
            this.form.patchValue({
              id: delivery.id,
              cliente: delivery.cliente,
              endereco: delivery.endereco,
              dataEstimadaEntrega: new Date(date.setDate(date.getDate() + 1)),
              produto: delivery.produto,
              observacoes: delivery.observacoes,
              historico: delivery?.historico,
              historicoPreview: this.formatarHistorico(auxHistorico),
              status: delivery.status,
            });
            this.form.markAsPristine();
          });
      }
    });
  }

  formatarHistorico(historico: { data: Date; status: string }[]): string {
    if (!historico?.length) {
      return 'Sem histórico';
    }

    return historico
      .map((h) => {
        const data = new Date(h.data).toLocaleDateString('pt-BR');
        return `${data} - ${h.status}`;
      })
      .join('\n');
  }

  onSubmit() {
    const delivery = this.form.value;
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.deliveryId) {
      delivery.id = this.deliveryId;
      delivery.dataEstimadaEntrega = this.formatDate();
      delivery.historico.push({
        data: new Date(),
        status: delivery.status,
      });
      delivery.dataEnvio = this.formatDate();
      this.deliveryService.updateDelivery(delivery).subscribe(
        () => {
          this.toastService.showSuccess('Entrega atualizada com sucesso!');
          this.router.navigate(['/']);
        },
        (error) =>
          this.toastService.showError(`Erro ao atualizar a entrega! ${error}`),
      );
      this.form.reset();
    } else {
      delivery.dataEstimadaEntrega = this.formatDate();
      delivery.status = 'Pendente';
      delivery.historico = [{ data: new Date(), status: 'Pendente' }];
      delivery.dataEnvio = this.formatDate();
      this.deliveryService.postNewDelivery(delivery).subscribe(
        () => {
          this.toastService.showSuccess('Entrega criada com sucesso!');
          this.router.navigate(['/']);
        },
        (error) =>
          this.toastService.showError(`Erro ao criar entrega! ${error}`),
      );
      this.form.reset();
    }
  }

  cancel() {
    this.form.reset();
    this.router.navigate(['/']);
  }

  formatDate() {
    const value = this.form.value.dataEstimadaEntrega;
    const date = value instanceof Date ? value : new Date(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
