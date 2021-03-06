import { Produto } from '../../domain/produto';

export class ProdutoEscolhidoArray {

  static produtosEscolhidos: Produto[] = [];

  static add(produto: Produto) {
    this.produtosEscolhidos.push(produto);
  }

  static clear() {
    this.produtosEscolhidos = [];
  }

  static list() {
    return this.produtosEscolhidos;
  }

  static contains(produto: Produto) {
    return this.produtosEscolhidos.some(produtoEscolhido => produtoEscolhido.id === produto.id);
  }

  static isEmpty() {
    return this.produtosEscolhidos.length === 0;
  }

  static isNotEmpty() {
    return !this.isEmpty();
  }
}
