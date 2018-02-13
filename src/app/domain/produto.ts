export class Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;

  constructor(id: number, nome: string, preco: number, quantidade: number = 1) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
  }
}
