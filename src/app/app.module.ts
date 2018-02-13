import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { StepModule } from './components/step/step.module';
import { CardsModule } from './components/cards/cards.module';
import { CarrinhoProdutosModule } from './components/carrinho-produtos/carrinho-produtos.module';
import { CardsComponent } from './components/cards/cards.component';
import { CarrinhoProdutosComponent } from './components/carrinho-produtos/carrinho-produtos.component';

const routes: Routes = [
  { path: 'first', component: CardsComponent },
  { path: 'secound', component: CarrinhoProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule,

    ToastyModule.forRoot(),

    StepModule,
    CardsModule,
    CarrinhoProdutosModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
