import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';

import { CardsComponent } from './cards.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule
  ],
  declarations: [CardsComponent],
  exports: [CardsComponent]
})
export class CardsModule { }
