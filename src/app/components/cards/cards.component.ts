import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  produtos = [];

  ngOnInit() {
    this.produtos = [{nome: 'Sabão', preco: '20.00'},
                    {nome: 'Geladeira', preco: '5.000'},
                    {nome: 'Televisão', preco: '8000.00'},
                    {nome: 'PS4', preco: '4000.00'},
                    {nome: 'Ar Condicionado', preco: '900.00'},
                    {nome: 'Celular Smartphone', preco: '2000.00'}];
  }

}
