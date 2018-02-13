export class ProdutoEscolhidoArray {

  static produtosEscolhidos: string[] = [];

  static add(produto) {
    this.produtosEscolhidos.push(produto);
  }

  static clear() {
    this.produtosEscolhidos = [];
  }

  static list() {
    return this.produtosEscolhidos;
  }

}
