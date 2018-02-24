import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';

import { NavbarComponent } from './navbar.component';


@NgModule({
  imports: [
    CommonModule,

    MenubarModule,
    ButtonModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
