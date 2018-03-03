import { Produto } from './produto';

export class ProdutoCarrinho {
  quantidade: number;
  produto: Produto;

  constructor(quantidade: number, produto: Produto) {
      this.quantidade = quantidade;
      this.produto = produto;
  }
}
