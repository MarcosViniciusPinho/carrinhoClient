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
    this.produtos = [{nome: 'Sabão', preco: '20.00', id: 1},
                    {nome: 'Geladeira', preco: '5.000', id: 5},
                    {nome: 'Televisão', preco: '8000.00', id: 10},
                    {nome: 'PS4', preco: '4000.00', id: 12},
                    {nome: 'Ar Condicionado', preco: '900.00', id: 15},
                    {nome: 'Celular Smartphone', preco: '2000.00', id: 16},
                    {nome: 'Sabão', preco: '20.00', id: 20},
                    {nome: 'Geladeira', preco: '5.000', id: 22},
                    {nome: 'Televisão', preco: '8000.00', id: 24},
                    {nome: 'PS4', preco: '4000.00', id: 25},
                    {nome: 'Ar Condicionado', preco: '900.00', id: 31},
                    {nome: 'Celular Smartphone', preco: '2000.00', id: 33},
                    {nome: 'Sabão', preco: '20.00', id: 36},
                    {nome: 'Geladeira', preco: '5.000', id: 40},
                    {nome: 'Televisão', preco: '8000.00', id: 42},
                    {nome: 'PS4', preco: '4000.00', id: 45},
                    {nome: 'Ar Condicionado', preco: '900.00', id: 47},
                    {nome: 'Celular Smartphone', preco: '2000.00', id: 49},
                    {nome: 'Sabão', preco: '20.00', id: 52},
                    {nome: 'Geladeira', preco: '5.000', id: 55},
                    {nome: 'Televisão', preco: '8000.00', id: 60},
                    {nome: 'PS4', preco: '4000.00', id: 63},
                    {nome: 'Ar Condicionado', preco: '900.00', id: 64},
                    {nome: 'Celular Smartphone', preco: '2000.00', id: 67},
                    {nome: 'Sabão', preco: '20.00', id: 75},
                    {nome: 'Geladeira', preco: '5.000', id: 80},
                    {nome: 'Televisão', preco: '8000.00', id: 82},
                    {nome: 'PS4', preco: '4000.00', id: 85},
                    {nome: 'Ar Condicionado', preco: '900.00', id: 90},
                    {nome: 'Celular Smartphone', preco: '2000.00', id: 95}];
  }

  selecionarProduto(produto, row) {
    this.produtos.splice(row, 1);
    this.produtosEscolhidos.push(produto);
  }

}
