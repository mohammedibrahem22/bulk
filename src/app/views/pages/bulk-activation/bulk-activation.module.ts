import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkActivationRoutingModule } from './bulk-activation-routing.module';
import { ActivationActivitiesComponent } from './activation-activities/activation-activities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';


@NgModule({
  declarations: [ActivationActivitiesComponent],
  imports: [
    CommonModule,
    BulkActivationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ]
})
export class BulkActivationModule { }
