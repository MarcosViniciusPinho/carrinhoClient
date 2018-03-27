import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';
import { Produto } from '../../domain/produto';

@Component({
  selector: 'app-carrinho-produtos',
  templateUrl: './carrinho-produtos.component.html'
})
export class CarrinhoProdutosComponent implements OnInit {

  produtosEscolhidos: Produto[] = [];

  // tslint:disable-next-line:no-inferrable-types
  totalAPagar: number = 0;

  constructor(private toastyService: ToastyService,
              private router: Router) {}

  ngOnInit() {
    this.produtosEscolhidos = ProdutoEscolhidoArray.list();
    this.calcularTotalAoIniciar();
    this.redirecionarParaFirst();
  }

  redirecionarParaFirst() {
    if (ProdutoEscolhidoArray.isEmpty()) {
      this.router.navigate(['/first']);
    }
  }

  calcularTotalAoIniciar() {
    for (const produto of this.produtosEscolhidos) {
        this.totalAPagar += produto.valor * produto.quantidade;
    }
  }

  calcularTotalAposQuantidadeDeUmProdutoSerAlterada() {
    this.totalAPagar = 0;
    this.calcularTotalAoIniciar();
  }

  calcularTotalAposExclusaoDeUmProduto(produto: Produto) {
    this.totalAPagar -= produto.valor * produto.quantidade;
  }

  excluirProduto(produto: Produto) {
    this.produtosEscolhidos = this.produtosEscolhidos.filter(obj => obj !== produto);
    this.calcularTotalAposExclusaoDeUmProduto(produto);
    this.atualizarGridDaFaseTres(produto);
    this.toastyService.success(`Produto foi removido do carrinho`.toUpperCase());
  }

  atualizarGridDaFaseTres(produto: Produto) {
    ProdutoEscolhidoArray.clear();
    this.produtosEscolhidos.forEach(produto => ProdutoEscolhidoArray.add(produto));
  }
}
