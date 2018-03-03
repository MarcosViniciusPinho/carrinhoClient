import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';
import { Produto } from '../../domain/produto';

@Component({
  selector: 'app-comprar-produtos',
  templateUrl: './comprar-produtos.component.html',
  styleUrls: ['./comprar-produtos.component.css']
})
export class ComprarProdutosComponent implements OnInit {

  produtosEscolhidos: Produto[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.produtosEscolhidos = ProdutoEscolhidoArray.list();
    this.redirecionarParaFirst();
  }

  redirecionarParaFirst() {
    if (ProdutoEscolhidoArray.isEmpty()) {
      this.router.navigate(['/first']);
    }
  }

}
