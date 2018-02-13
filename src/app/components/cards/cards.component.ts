import { Component, OnInit } from '@angular/core';

import { ToastyService } from 'ng2-toasty';
import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';
import { Produto } from '../../domain/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private toastyService: ToastyService,
              private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.list().then(produtosCarregados => this.produtos = produtosCarregados);

    /* this.produtos = [new Produto(1, 'Sabão', Math.floor((Math.random() * 70.5))),
                    new Produto(5, 'Geladeira', Math.floor((Math.random() * 70.5))),
                    new Produto(10, 'Televisão', Math.floor((Math.random() * 70.5))),
                    new Produto(12, 'PS4', Math.floor((Math.random() * 70.5))),
                    new Produto(15, 'Ar Condicionado', Math.floor((Math.random() * 70.5))),
                    new Produto(16, 'Celular Smartphone', Math.floor((Math.random() * 70.5))),
                    new Produto(20, 'Computador Ultima Geração', Math.floor((Math.random() * 70.5))),
                    new Produto(22, 'Maquina de fotografia', Math.floor((Math.random() * 70.5))),
                    new Produto(24, 'Livros', Math.floor((Math.random() * 70.5))),
                    new Produto(25, 'Maquina de lavar', Math.floor((Math.random() * 70.5))),
                    new Produto(31, 'Impressora', Math.floor((Math.random() * 70.5))),
                    new Produto(33, 'Mouse', Math.floor((Math.random() * 70.5))),
                    new Produto(36, 'Mesa para PC', Math.floor((Math.random() * 70.5))),
                    new Produto(40, 'Cadeira para PC', Math.floor((Math.random() * 70.5))),
                    new Produto(42, 'Mini ventilador', Math.floor((Math.random() * 70.5))),
                    new Produto(45, 'Ventilador', Math.floor((Math.random() * 70.5))),
                    new Produto(47, 'Mouse Pad', Math.floor((Math.random() * 70.5)))]; */
  }

  selecionarProduto(produto: Produto) {
    this.produtos = this.produtos.filter(obj => obj !== produto);
    ProdutoEscolhidoArray.add(produto);
    this.toastyService.success(`Produto adicionado no carrinho`.toUpperCase());
  }

}
