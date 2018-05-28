import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { LogoutService } from '../../services/logout.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LogoutService],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
