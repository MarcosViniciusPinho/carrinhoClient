export class Produto {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  nomeCategoria: string;
  quantidade: number;

  constructor(id: number, nome: string, descricao: string, valor: number,
              nomeCategoria: string, quantidade: number = 1) {
      this.id = id;
      this.nome = nome;
      this.descricao = descricao;
      this.valor = valor;
      this.nomeCategoria = nomeCategoria;
      this.quantidade = quantidade;
  }
}
