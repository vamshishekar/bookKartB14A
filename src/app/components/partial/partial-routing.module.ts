import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path: 'sample', component: SampleComponent },
  {path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
