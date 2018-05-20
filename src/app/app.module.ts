import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { HttpModule } from '@angular/http';
import localePt from '@angular/common/locales/pt';

import { ToastyModule } from 'ng2-toasty';
import { JwtHelper } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { StepModule } from './components/step/step.module';
import { CardsModule } from './components/cards/cards.module';
import { CarrinhoProdutosModule } from './components/carrinho-produtos/carrinho-produtos.module';
import { ComprarProdutosModule } from './components/comprar-produtos/comprar-produtos.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { CardsComponent } from './components/cards/cards.component';
import { CarrinhoProdutosComponent } from './components/carrinho-produtos/carrinho-produtos.component';
import { ComprarProdutosComponent } from './components/comprar-produtos/comprar-produtos.component';
import { LoginModule } from './components/login/login.module';

registerLocaleData(localePt);

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: CardsComponent },
  { path: 'secound', component: CarrinhoProdutosComponent},
  { path: 'three', component: ComprarProdutosComponent}
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
    CarrinhoProdutosModule,
    ComprarProdutosModule,
    NavbarModule,
    LoginModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, { provide: LOCALE_ID, useValue: 'pt' }, JwtHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
