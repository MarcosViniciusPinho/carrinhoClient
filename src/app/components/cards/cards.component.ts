import { Component, OnInit } from '@angular/core';

import { ToastyService } from 'ng2-toasty';
import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';
import { Produto } from '../../domain/produto';
import { ProdutoService } from '../../services/produto.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Categoria } from '../../domain/categoria';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private toastyService: ToastyService,
              private produtoService: ProdutoService,
              private errorHandler: ErrorHandlerService) {}

  ngOnInit() {
    this.produtoService.list().then(produtosCarregados =>
      this.produtos = this.inserirValorParaAtributoQuantidadeDeProduto(produtosCarregados))
      .catch(response => this.errorHandler.handle(response));
  }

  pesquisar(campoPesquisado) {
    this.produtoService.list(campoPesquisado).then(produtosCarregados => {
        const produtos = this.inserirValorParaAtributoQuantidadeDeProduto(produtosCarregados);
        this.produtos = this.removerProdutoEscolhidoAoPesquisar(produtos);
    }).catch(response => this.errorHandler.handle(response));
  }

  inserirValorParaAtributoQuantidadeDeProduto(produtosBuscados) {
    const produtos: Produto[] = [];
    for (const p of produtosBuscados) {
      produtos.push(new Produto(p.id, p.nome, p.descricao, p.valor, p.categoria, p.pathImagem, p.capacidade));
    }
    return produtos;
  }

  removerProdutoEscolhidoAoPesquisar(produtos: Produto[]) {
    if (ProdutoEscolhidoArray.isNotEmpty()) {
      const produtosFiltrados: Produto[] = [];
      produtos.forEach(produto => {
        if (!ProdutoEscolhidoArray.contains(produto)) {
          produtosFiltrados.push(produto);
        }
      });
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
