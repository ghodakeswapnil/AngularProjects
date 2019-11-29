import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrDetailsComponent } from './hr-details/hr-details.component';
import { HrListComponent } from './hr-list/hr-list.component';



@NgModule({
  declarations: [HrDetailsComponent, HrListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HrDetailsComponent,
    HrListComponent
  ]
})
// Feature module component if you want to expose, you must exports[HrDetailsComponent]
export class HrModule { }
