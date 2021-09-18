import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificationsComponent } from './classifications/classifications.component';
import { ClassificationDetailsComponent } from './classification-details/classification-details.component';
import { ClassificationEditComponent } from './classification-edit/classification-edit.component';
import { ClassificationsRoutingModule } from './classifications-routing.module';
import { ClassificationsService } from './classifications.service';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const uiModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule
];


@NgModule({
  declarations: [
    ClassificationsComponent,
    ClassificationDetailsComponent,
    ClassificationEditComponent
  ],
  imports: [
    CommonModule,
    ...uiModules,
    ClassificationsRoutingModule
  ],
  providers: [
    ClassificationsService
  ]
})
export class ClassificationsModule { }
