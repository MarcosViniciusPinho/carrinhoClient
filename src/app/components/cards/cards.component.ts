import { Component, OnInit } from '@angular/core';

import { ToastyService } from 'ng2-toasty';
import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  produtos = [];

  constructor(private toastyService: ToastyService) {}

  ngOnInit() {
    this.produtos = [{nome: 'Sabão', preco: Math.floor((Math.random() * 70.5)), id: 1, quantidade: 1},
                    {nome: 'Geladeira', preco: Math.floor((Math.random() * 70.5)), id: 5, quantidade: 1},
                    {nome: 'Televisão', preco: Math.floor((Math.random() * 70.5)), id: 10, quantidade: 1},
                    {nome: 'PS4', preco: Math.floor((Math.random() * 70.5)), id: 12, quantidade: 1},
                    {nome: 'Ar Condicionado', preco: Math.floor((Math.random() * 70.5)), id: 15, quantidade: 1},
                    {nome: 'Celular Smartphone', preco: Math.floor((Math.random() * 70.5)), id: 16, quantidade: 1},
                    {nome: 'Computador Ultima Geração', preco: Math.floor((Math.random() * 70.5)), id: 20, quantidade: 1},
                    {nome: 'Maquina de fotografia', preco: Math.floor((Math.random() * 70.5)), id: 22, quantidade: 1},
                    {nome: 'Livros', preco: Math.floor((Math.random() * 70.5)), id: 24, quantidade: 1},
                    {nome: 'Maquina de lavar', preco: Math.floor((Math.random() * 70.5)), id: 25, quantidade: 1},
                    {nome: 'Impressora', preco: Math.floor((Math.random() * 70.5)), id: 31, quantidade: 1},
                    {nome: 'Mouse', preco: Math.floor((Math.random() * 70.5)), id: 33, quantidade: 1},
                    {nome: 'Mesa para PC', preco: Math.floor((Math.random() * 70.5)), id: 36, quantidade: 1},
                    {nome: 'Cadeira para PC', preco: Math.floor((Math.random() * 70.5)), id: 40, quantidade: 1},
                    {nome: 'Mini ventilador', preco: Math.floor((Math.random() * 70.5)), id: 42, quantidade: 1},
                    {nome: 'Ventilador', preco: Math.floor((Math.random() * 70.5)), id: 45, quantidade: 1},
                    {nome: 'Mouse Pad', preco: Math.floor((Math.random() * 70.5)), id: 47, quantidade: 1}];
  }

  selecionarProduto(produto) {
    this.produtos = this.produtos.filter(obj => obj !== produto);
    ProdutoEscolhidoArray.add(produto);
    this.toastyService.success(`Produto adicionado no carrinho`.toUpperCase());
  }

}
