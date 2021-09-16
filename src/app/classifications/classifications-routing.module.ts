import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassificationsComponent } from './classifications/classifications.component';
import { ClassificationDetailsComponent } from './classification-details/classification-details.component';
import { ClassificationEditComponent } from './classification-edit/classification-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ClassificationsComponent
  },
  {
    path: ':id',
    component: ClassificationDetailsComponent
  },
  {
    path: ':id/edit',
    component: ClassificationEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassificationsRoutingModule { }
