import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkActivationRoutingModule } from './bulk-activation-routing.module';
import { ActivationActivitiesComponent } from './activation-activities/activation-activities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';
import {FileUploadModule} from 'primeng/fileupload';
import { CorporateStructureComponent } from './corporate-structure/corporate-structure.component';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [ActivationActivitiesComponent, CorporateStructureComponent],
  imports: [
    CommonModule,
    BulkActivationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    FileUploadModule,
    DialogModule
  ]
})
export class BulkActivationModule { }
