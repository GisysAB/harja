import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BonusComponent } from "./bonus.component";




@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',component: BonusComponent
        },
      ])
    ],
    declarations: [BonusComponent]
  })
export class BonusModule { }
