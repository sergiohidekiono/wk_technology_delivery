import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/core/services/delivery.service';

@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.scss'],
})
export class NewDeliveryComponent implements OnInit {
  form: FormGroup;
  today = new Date();

  constructor(
    form: FormBuilder,
    private router: Router,
    private deliveryService: DeliveryService
  ) {
    this.form = form.group({
      cliente: ['', Validators.required],
      endereco: ['', Validators.required],
      dataEstimadaEntrega: ['', Validators.required],
      produto: ['', Validators.required],
      observacoes: [''],
    });
    this.today.setDate(this.today.getDate() + 1);
  }

  ngOnInit(): void {}

  onSubmit() {
    const delivery = this.form.value;
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    delivery.dataEstimadaEntrega = this.formatDate();
    delivery.status = 'Pendente';
    delivery.historico = [{ data: new Date(), status: 'Pendente' }];
    delivery.dataEnvio = this.formatDate();
    this.deliveryService.postNewDelivery(delivery).subscribe(() => {
      this.router.navigate(['/']);
    });
    this.form.reset();
  }

  cancel() {
    this.form.reset();
    this.router.navigate(['/']);
  }

  formatDate() {
    const delivery = this.form.value;

    const year = delivery.dataEstimadaEntrega.getFullYear();
    const month = String(delivery.dataEstimadaEntrega.getMonth() + 1).padStart(
      2,
      '0'
    );
    const day = String(delivery.dataEstimadaEntrega.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
