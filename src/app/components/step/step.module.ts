import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsModule } from 'primeng/steps';
import {ButtonModule} from 'primeng/button';

import { StepComponent } from './step.component';

@NgModule({
  imports: [
    CommonModule,

    ButtonModule,
    StepsModule
  ],
  declarations: [StepComponent],
  exports: [StepComponent]
})
export class StepModule { }
