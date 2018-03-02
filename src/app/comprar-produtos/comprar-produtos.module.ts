import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprarProdutosComponent } from './comprar-produtos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComprarProdutosComponent],
  exports: [ComprarProdutosComponent]
})
export class ComprarProdutosModule { }
