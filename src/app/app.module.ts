import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { StepModule } from './components/step/step.module';
import { CardsModule } from './components/cards/cards.module';
import { CarrinhoProdutosModule } from './components/carrinho-produtos/carrinho-produtos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ToastyModule.forRoot(),

    StepModule,
    CardsModule,
    CarrinhoProdutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
