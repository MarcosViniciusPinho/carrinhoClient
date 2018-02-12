import { Component, OnInit } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

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

    this.produtosEscolhidos = [{nome: 'Sabão', preco: 50, id: 1, quantidade: 1},
                              {nome: 'Geladeira', preco: 50, id: 5, quantidade: 1},
                              {nome: 'Televisão', preco: 50, id: 10, quantidade: 1},
                              {nome: 'PS4', preco: 50, id: 12, quantidade: 1},
                              {nome: 'Ar Condicionado', preco: 50, id: 15, quantidade: 1}];
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
    this.toastyService.success(`O produto ${produto.nome} foi excluído do carrinho`.toUpperCase());
  }

}
