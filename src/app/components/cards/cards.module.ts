import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';

import { CardsComponent } from './cards.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    InputTextModule
  ],
  declarations: [CardsComponent],
  exports: [CardsComponent]
})
export class CardsModule { }
