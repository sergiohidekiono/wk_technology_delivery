import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [],
  imports: [ButtonModule, MenuModule, ToastModule, DividerModule],
  exports: [ButtonModule, MenuModule, ToastModule, DividerModule],
})
export class SharedModule {}
