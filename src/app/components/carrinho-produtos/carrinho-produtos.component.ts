import { Component, OnInit } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';

@Component({
  selector: 'app-carrinho-produtos',
  templateUrl: './carrinho-produtos.component.html'
})
export class CarrinhoProdutosComponent implements OnInit {

  produtosEscolhidos = [];

  // tslint:disable-next-line:no-inferrable-types
  totalAPagar: number = 0;

  constructor(private toastyService: ToastyService) {}

  ngOnInit() {
    this.produtosEscolhidos = ProdutoEscolhidoArray.list();
    this.calcularTotalAoIniciar();
  }

  calcularTotalAoIniciar() {
    for (const produto of this.produtosEscolhidos) {
        this.totalAPagar += produto.preco * produto.quantidade;
    }
  }

  calcularTotalAposQuantidadeDeUmProdutoSerAlterada() {
    this.totalAPagar = 0;
    this.calcularTotalAoIniciar();
  }

  calcularTotalAposExclusaoDeUmProduto(produto) {
    this.totalAPagar -= produto.preco * produto.quantidade;
  }

  excluirProduto(produto) {
    this.produtosEscolhidos = this.produtosEscolhidos.filter(obj => obj !== produto);
    this.calcularTotalAposExclusaoDeUmProduto(produto);
    this.toastyService.success(`Produto foi removido do carrinho`.toUpperCase());
  }

}
