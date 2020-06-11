import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([{
    path: '',
    component: WelcomeComponent
  },])],
  exports: [RouterModule]
})
export class WelcomePageRoutingModule { }
