import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: DeliveryComponent },
  { path: 'nova-entrega', component: DeliveryComponent },
  { path: 'nova-entrega/:id', component: DeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryRoutingModule {}
