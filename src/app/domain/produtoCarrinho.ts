import { Produto } from './produto';

export class ProdutoCarrinho {
  quantidade: number;
  produto: Produto;

  constructor(produto: Produto) {
      this.quantidade = produto.quantidade;
      this.produto = produto;
  }
}
