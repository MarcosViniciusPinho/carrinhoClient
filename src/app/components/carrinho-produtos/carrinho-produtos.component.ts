import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho-produtos',
  templateUrl: './carrinho-produtos.component.html'
})
export class CarrinhoProdutosComponent implements OnInit {

  produtosEscolhidos = [];

  ngOnInit() {

    this.produtosEscolhidos = [{nome: 'Sabão', preco: Math.floor((Math.random() * 70.5)), id: 1, quantidade: 1},
                              {nome: 'Geladeira', preco: Math.floor((Math.random() * 70.5)), id: 5, quantidade: 1},
                              {nome: 'Televisão', preco: Math.floor((Math.random() * 70.5)), id: 10, quantidade: 1},
                              {nome: 'PS4', preco: Math.floor((Math.random() * 70.5)), id: 12, quantidade: 1},
                              {nome: 'Ar Condicionado', preco: Math.floor((Math.random() * 70.5)), id: 15, quantidade: 1}];

  }

  excluirProduto(produto) {
    this.produtosEscolhidos = this.produtosEscolhidos.filter(obj => obj !== produto);
  }

}
