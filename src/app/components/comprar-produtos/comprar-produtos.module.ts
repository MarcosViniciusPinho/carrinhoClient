import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';

import {NgxMaskModule} from 'ngx-mask';

import { ComprarProdutosComponent } from './comprar-produtos.component';
import { CarrinhoService } from '../../services/carrinho.service';
import { CorreioService } from '../../services/correio.service';
import { EstadoService } from '../../services/estado.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TableModule,
    ButtonModule,
    AccordionModule,
    InputTextModule,

    NgxMaskModule.forRoot()
  ],
  providers: [CarrinhoService, CorreioService, EstadoService],
  declarations: [ComprarProdutosComponent],
  exports: [ComprarProdutosComponent]
})
export class ComprarProdutosModule { }
