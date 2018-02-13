import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DataGridModule} from 'primeng/datagrid';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';

import { CardsComponent } from './cards.component';
import { ProdutoService } from '../../services/produto.service';

@NgModule({
  imports: [
    CommonModule,

    DataGridModule,
    InputTextModule,
    ButtonModule,
    PanelModule
  ],
  providers: [ProdutoService],
  declarations: [CardsComponent],
  exports: [CardsComponent]
})
export class CardsModule { }
