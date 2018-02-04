import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StepsModule } from 'primeng/steps';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
