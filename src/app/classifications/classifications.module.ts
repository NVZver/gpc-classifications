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
import { ClassificationDetailsMainComponent } from './classification-details-main/classification-details-main.component';
import { ClassificationDetailsAttributesComponent } from './classification-details-attributes/classification-details-attributes.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ClassificationDetailsTrackingComponent } from './classification-details-tracking/classification-details-tracking.component';

const uiModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
];


@NgModule({
  declarations: [
    ClassificationsComponent,
    ClassificationDetailsComponent,
    ClassificationEditComponent,
    ClassificationDetailsMainComponent,
    ClassificationDetailsAttributesComponent,
    ClassificationDetailsTrackingComponent
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
