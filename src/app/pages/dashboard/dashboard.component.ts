import { Component, ViewChild } from '@angular/core';

import { Deliverys } from 'src/app/shared/interfaces/deliverys.interface';
import { DeliveryService } from 'src/app/core/services/delivery.service';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  deliverys!: Deliverys[];
  loading: boolean = true;
  statuses!: any[];
  isMobile = false;
  @ViewChild('dt2') table!: Table;
  filteredDeliverys!: Deliverys[];

  filtersVisible: boolean = false;

  mobileFilters = {
    id: '',
    cliente: '',
    status: null as string | null,
  };

  constructor(
    private deliveryService: DeliveryService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.checkScreen();
    window.addEventListener('resize', () => this.checkScreen());
    this.deliveryService.getDeliverys().subscribe((data: Deliverys[]) => {
      this.loading = false;
      this.deliverys = data;
      this.filteredDeliverys = data;
    });
    this.statuses = this.deliveryService.getStatuses();
  }

  checkScreen() {
    this.isMobile = window.innerWidth < 768;
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'Pendente':
        return 'warning';
      case 'Em Rota':
        return 'info';
      case 'Entregue':
        return 'success';
      case 'Cancelada':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  clear(table: Table) {
    table.clear();
  }

  editDelivery(deliveryId: Deliverys) {
    this.router.navigate(['/nova-entrega', deliveryId]);
  }

  applyMobileFilters() {
    this.filteredDeliverys = this.deliverys.filter((d) => {
      const matchId =
        !this.mobileFilters.id ||
        d.id.toString().includes(this.mobileFilters.id);

      const matchCliente =
        !this.mobileFilters.cliente ||
        d.cliente
          .toLowerCase()
          .includes(this.mobileFilters.cliente.toLowerCase());

      const matchStatus =
        !this.mobileFilters.status || d.status === this.mobileFilters.status;

      return matchId && matchCliente && matchStatus;
    });

    this.filtersVisible = false;
  }

  clearMobileFilters() {
    this.mobileFilters = { id: '', cliente: '', status: null };
    this.filteredDeliverys = [...this.deliverys];
  }
}
