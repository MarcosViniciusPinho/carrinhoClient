import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';

import { Carrinho } from '../../domain/carrinho';
import { Usuario } from '../../domain/usuario';
import { Produto } from '../../domain/produto';

import { CarrinhoService } from '../../services/carrinho.service';
import { ProdutoCarrinho } from '../../domain/produtoCarrinho';

@Component({
  selector: 'app-comprar-produtos',
  templateUrl: './comprar-produtos.component.html',
  styleUrls: ['./comprar-produtos.component.css']
})
export class ComprarProdutosComponent implements OnInit {

  produtosEscolhidos: Produto[] = [];

  usuario: Usuario;

  constructor(private router: Router,
              private carrinhoService: CarrinhoService,
              private toastyService: ToastyService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.produtosEscolhidos = ProdutoEscolhidoArray.list();
    this.redirecionarParaFirst();
  }

  redirecionarParaFirst() {
    if (ProdutoEscolhidoArray.isEmpty()) {
      this.router.navigate(['/first']);
    }
  }

  salvar() {
    this.carrinhoService.create(this.createCarrinho())
      .then(carrinho => {
        this.toastyService.wait(`Prezado usuário ${carrinho.usuario.login}, sua compra foi realizada com sucesso!`);
        this.router.navigate(['/first']);
      });
  }

  createCarrinho() {
    this.usuario.login = 'MarcosPinho';
    const produtosCarrinhos: ProdutoCarrinho[] = [];
    this.produtosEscolhidos.forEach(produto => {
      produtosCarrinhos.push(new ProdutoCarrinho(produto));
    });
    return new Carrinho(this.usuario, produtosCarrinhos);
  }

}
