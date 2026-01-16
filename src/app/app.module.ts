import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    TablerIconsModule.pick(TablerIcons, {
      ignoreWarnings: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
