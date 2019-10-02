import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: EmployeeComponent, 
      },
    ])

  ],

  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
