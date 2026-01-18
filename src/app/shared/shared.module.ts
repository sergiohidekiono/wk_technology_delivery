import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule,
    ToastModule,
    DividerModule,
    TableModule,
    TagModule,
    InputTextModule,
    DropdownModule,
    CardModule,
    CalendarModule,
    InputTextareaModule,
    SidebarModule,
    ProgressSpinnerModule,
  ],
  exports: [
    LoadingComponent,
    ButtonModule,
    MenuModule,
    ToastModule,
    DividerModule,
    TableModule,
    TagModule,
    InputTextModule,
    DropdownModule,
    CardModule,
    CalendarModule,
    InputTextareaModule,
    SidebarModule,
    ProgressSpinnerModule,
  ],
})
export class SharedModule {}
