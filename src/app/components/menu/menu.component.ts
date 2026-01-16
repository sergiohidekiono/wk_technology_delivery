import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MessageService],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        tablerIcon: 'dashboard',
        command: () => this.menu('dashboard'),
      },
      {
        label: 'Nova Entrega',
        tablerIcon: 'plus',
        command: () => this.menu('newDelivery'),
      },
      {
        label: 'Entregas',
        tablerIcon: 'truck-delivery',
        command: () => this.menu('deliverys'),
      },
      {
        label: 'Relatórios',
        tablerIcon: 'report-analytics',
        command: () => this.menu('reports'),
      },
    ];
  }

  menu(option: string) {}
}
