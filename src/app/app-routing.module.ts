import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'classifications',
    loadChildren: () => import('./classifications/classifications.module').then((m) => m.ClassificationsModule),
  },
  {
    path: '',
    redirectTo: '/classifications',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
