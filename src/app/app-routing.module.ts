import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewDeliveryComponent } from './components/new-delivery/new-delivery.component';
import { DeliverysComponent } from './components/deliverys/deliverys.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'novas-entregas', component: NewDeliveryComponent },
  { path: 'entregas', component: DeliverysComponent },
  { path: 'relatorios', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
