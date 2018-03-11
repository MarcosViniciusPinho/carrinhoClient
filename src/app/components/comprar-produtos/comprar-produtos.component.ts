import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import swal from 'sweetalert2';

import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';

import { Carrinho } from '../../domain/carrinho';
import { Usuario } from '../../domain/usuario';
import { Produto } from '../../domain/produto';
import { Endereco } from '../../domain/endereco';

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

  totalAPagar: number;

  constructor(private router: Router,
              private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.produtosEscolhidos = ProdutoEscolhidoArray.list();
    this.totalAPagar = this.calcularTotalAoIniciar();
    this.redirecionarParaFirst();
  }

  calcularTotalAoIniciar() {
    let totalAPagar = 0;
    for (const produto of this.produtosEscolhidos) {
        totalAPagar += produto.valor * produto.quantidade;
    }
    return totalAPagar;
  }

  redirecionarParaFirst() {
    if (ProdutoEscolhidoArray.isEmpty()) {
      this.router.navigate(['/first']);
    }
  }

  salvar(form: NgForm) {
    this.carrinhoService.create(this.createCarrinho(form))
      .then(carrinho => {
        swal({
          title: 'Sucesso!',
          text: `Sua compra foi realizada com êxito, prezado ${carrinho.usuario.nome}.
          Enviamos para você a relação de produtos adquiridos via e-mail.`,
          type: 'success',
          confirmButtonText: 'Voltar a página inicial'
        }).then(() => {
            location.reload();
        });
      });
  }

  createCarrinho(form: NgForm) {
    this.usuario.endereco = new Endereco(form.value.cep, form.value.logradouro, form.value.complemento,
      form.value.bairro, form.value.municipio, form.value.estado);
    this.usuario.login = 'MarcosPinho';
    const produtosCarrinhos: ProdutoCarrinho[] = [];
    this.produtosEscolhidos.forEach(produto => {
      produtosCarrinhos.push(new ProdutoCarrinho(produto));
    });
    return new Carrinho(this.usuario, produtosCarrinhos);
  }

}
