import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'nova-entrega', component: DeliveryComponent },
  { path: 'nova-entrega/:id', component: DeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
