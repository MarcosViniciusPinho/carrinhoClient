import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';

import { ComprarProdutosComponent } from './comprar-produtos.component';
import { CarrinhoService } from '../../services/carrinho.service';

@NgModule({
  imports: [
    CommonModule,

    TableModule,
    ButtonModule,
    AccordionModule
  ],
  providers: [CarrinhoService],
  declarations: [ComprarProdutosComponent],
  exports: [ComprarProdutosComponent]
})
export class ComprarProdutosModule { }
