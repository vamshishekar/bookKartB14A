import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AgGridModule } from 'ag-grid-angular';
import { ProductRoutingModule } from './partial-routing.module';



@NgModule({
  declarations: [SampleComponent, DashboardComponent],
  imports: [
    CommonModule, 
    // AgGridModule   ,
    ProductRoutingModule

  ]
})
export class PartialModule { }
