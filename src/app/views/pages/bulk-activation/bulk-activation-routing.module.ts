import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationActivitiesComponent } from './activation-activities/activation-activities.component';
import { CorporateStructureComponent } from './corporate-structure/corporate-structure.component';


const routes: Routes = [
  {
      path: 'create-corporate-acceount',
      component: ActivationActivitiesComponent
  },
  {
    path: 'corporate-structure-information',
    component: CorporateStructureComponent
},
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkActivationRoutingModule { }
