import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkActivationRoutingModule } from './bulk-activation-routing.module';
import { ActivationActivitiesComponent } from './activation-activities/activation-activities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ActivationActivitiesComponent],
  imports: [
    CommonModule,
    BulkActivationRoutingModule,
    FormsModule,
		ReactiveFormsModule,
  ]
})
export class BulkActivationModule { }
