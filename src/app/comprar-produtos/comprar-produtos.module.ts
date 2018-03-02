import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';

import { ComprarProdutosComponent } from './comprar-produtos.component';

@NgModule({
  imports: [
    CommonModule,

    TableModule
  ],
  declarations: [ComprarProdutosComponent],
  exports: [ComprarProdutosComponent]
})
export class ComprarProdutosModule { }
