import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsModule } from 'primeng/steps';

import { StepComponent } from './step.component';

@NgModule({
  imports: [
    CommonModule,
    StepsModule
  ],
  declarations: [StepComponent],
  exports: [StepComponent]
})
export class StepModule { }
