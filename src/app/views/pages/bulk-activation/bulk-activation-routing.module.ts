import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationActivitiesComponent } from './activation-activities/activation-activities.component';


const routes: Routes = [{
      path: 'create-corporate-acceount',
      component: ActivationActivitiesComponent
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkActivationRoutingModule { }
