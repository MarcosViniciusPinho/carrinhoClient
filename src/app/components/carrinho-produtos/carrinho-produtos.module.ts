import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {DataGridModule} from 'primeng/datagrid';
import {DataTableModule} from 'primeng/datatable';
import {SpinnerModule} from 'primeng/spinner';

import { CarrinhoProdutosComponent } from './carrinho-produtos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    DataGridModule,
    DataTableModule,
    SpinnerModule
  ],
  declarations: [CarrinhoProdutosComponent],
  exports: [CarrinhoProdutosComponent]
})
export class CarrinhoProdutosModule { }
