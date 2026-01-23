import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppMenuItem } from 'src/app/shared/interfaces/appMenu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: AppMenuItem[] = [];
  isMobile = false;
  mobileMenuVisible = false;

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
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen.bind(this));
  }

  checkScreen() {
    this.isMobile = window.innerWidth < 768;
  }

  menu(option: string) {
    switch (option) {
      case 'dashboard':
        this.router.navigate(['/']);
        break;
      case 'delivery':
        this.router.navigate(['delivery/nova-entrega']);
        break;
    }
  }

  menuItemMobile(item: AppMenuItem) {
    item.command?.({ item });
    this.mobileMenuVisible = false;
  }
}
