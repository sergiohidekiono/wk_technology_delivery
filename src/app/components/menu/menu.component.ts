import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

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
        command: () => this.menu('delivery'),
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

  menu(option: string) {
    switch (option) {
      case 'dashboard':
        this.router.navigate(['/']);
        break;
      case 'delivery':
        this.router.navigate(['/nova-entrega']);
        break;
    }
  }
}
