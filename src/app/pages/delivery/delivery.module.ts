import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryComponent } from './delivery.component';

@NgModule({
  declarations: [DeliveryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DeliveryRoutingModule,
    SharedModule,
  ],
})
export class DeliveryModule {}
