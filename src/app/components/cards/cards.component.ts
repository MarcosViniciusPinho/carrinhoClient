import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  produtos = [];
  produtosEscolhidos = [];

  ngOnInit() {
    this.produtos = [{nome: 'Sabão', preco: Math.floor((Math.random() * 70.5)), id: 1},
                    {nome: 'Geladeira', preco: Math.floor((Math.random() * 70.5)), id: 5},
                    {nome: 'Televisão', preco: Math.floor((Math.random() * 70.5)), id: 10},
                    {nome: 'PS4', preco: Math.floor((Math.random() * 70.5)), id: 12},
                    {nome: 'Ar Condicionado', preco: Math.floor((Math.random() * 70.5)), id: 15},
                    {nome: 'Celular Smartphone', preco: Math.floor((Math.random() * 70.5)), id: 16},
                    {nome: 'Computador Ultima Geração', preco: Math.floor((Math.random() * 70.5)), id: 20},
                    {nome: 'Maquina de fotografia', preco: Math.floor((Math.random() * 70.5)), id: 22},
                    {nome: 'Livros', preco: Math.floor((Math.random() * 70.5)), id: 24},
                    {nome: 'Maquina de lavar', preco: Math.floor((Math.random() * 70.5)), id: 25},
                    {nome: 'Impressora', preco: Math.floor((Math.random() * 70.5)), id: 31},
                    {nome: 'Mouse', preco: Math.floor((Math.random() * 70.5)), id: 33},
                    {nome: 'Mesa para PC', preco: Math.floor((Math.random() * 70.5)), id: 36},
                    {nome: 'Cadeira para PC', preco: Math.floor((Math.random() * 70.5)), id: 40},
                    {nome: 'Mini ventilador', preco: Math.floor((Math.random() * 70.5)), id: 42},
                    {nome: 'Ventilador', preco: Math.floor((Math.random() * 70.5)), id: 45},
                    {nome: 'Mouse Pad', preco: Math.floor((Math.random() * 70.5)), id: 47}];
  }

  selecionarProduto(produto) {
    this.produtos = this.produtos.filter(obj => obj !== produto);
    this.produtosEscolhidos.push(produto);
  }

}
