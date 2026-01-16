import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    MenuModule,
    ToastModule,
    DividerModule,
    TableModule,
    TagModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [
    ButtonModule,
    MenuModule,
    ToastModule,
    DividerModule,
    TableModule,
    TagModule,
    InputTextModule,
    DropdownModule
  ],
})
export class SharedModule {}
