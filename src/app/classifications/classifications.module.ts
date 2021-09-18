import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificationsComponent } from './classifications/classifications.component';
import { ClassificationDetailsComponent } from './classification-details/classification-details.component';
import { ClassificationEditComponent } from './classification-edit/classification-edit.component';
import { ClassificationsRoutingModule } from './classifications-routing.module';
import { ClassificationsService } from './classifications.service';




@NgModule({
  declarations: [
    ClassificationsComponent,
    ClassificationDetailsComponent,
    ClassificationEditComponent
  ],
  imports: [
    CommonModule,
    ClassificationsRoutingModule
  ],
  providers: [
    ClassificationsService
  ]
})
export class ClassificationsModule { }
