import { Component } from '@angular/core';
import { SortEvent } from 'primeng/api';

import { DashboardService } from './dashboard.service';
import { Deliverys } from 'src/app/shared/interfaces/deliverys.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  deliverys!: Deliverys[];
  loading: boolean = true;
  statuses!: any[];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getDeliverys().subscribe((data: Deliverys[]) => {
      console.log(data);
      this.loading = false;
      this.deliverys = data;
    });

    this.statuses = [
      { label: 'Pendente', value: 'Pendente' },
      { label: 'Em Rota', value: 'Em Rota' },
      { label: 'Entregue', value: 'Entregue' },
      { label: 'Cancelada', value: 'Cancelada' },
    ];
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

  getSeverity(e: any) {
    console.log('EVENT: ', e);
  }
}
