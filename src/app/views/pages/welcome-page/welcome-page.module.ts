import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomePageRoutingModule
  ]
})
export class WelcomePageModule { }
