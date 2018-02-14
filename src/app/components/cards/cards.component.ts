import { Component, OnInit } from '@angular/core';

import { ToastyService } from 'ng2-toasty';
import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';
import { Produto } from '../../domain/produto';
import { ProdutoService } from '../../services/produto.service';
import { Categoria } from '../../domain/categoria';

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
    this.produtoService.list().then(produtosCarregados =>
      this.produtos = this.inserirValorParaAtributoQuantidadeDeProduto(produtosCarregados));
  }

  pesquisar(campoPesquisado) {
    this.produtoService.list(campoPesquisado).then(produtosCarregados => {
        const produtos = this.inserirValorParaAtributoQuantidadeDeProduto(produtosCarregados);
        this.produtos = this.removerProdutoEscolhidoAoPesquisar(produtos);
    });
  }

  inserirValorParaAtributoQuantidadeDeProduto(produtosBuscados) {
    const produtos: Produto[] = [];
    for (const p of produtosBuscados) {
      produtos.push(new Produto(p.id, p.nome, p.descricao, p.valor, p.categoria));
    }
    return produtos;
  }

  removerProdutoEscolhidoAoPesquisar(produtos: Produto[]) {
    if (ProdutoEscolhidoArray.list().length !== 0) {
      let produtosFiltrados: Produto[] = [];
      for (const produtoEscolhido of ProdutoEscolhidoArray.list()) {
        produtosFiltrados = produtos.filter(produto => produto.id !== produtoEscolhido.id);
      }
      return produtosFiltrados;
    }
    return produtos;
  }

  selecionarProduto(produto: Produto) {
    this.produtos = this.produtos.filter(obj => obj !== produto);
    ProdutoEscolhidoArray.add(produto);
    this.toastyService.success(`Produto adicionado no carrinho`.toUpperCase());
  }

}
