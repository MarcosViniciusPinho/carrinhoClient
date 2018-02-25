import { Categoria } from './categoria';

export class Produto {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  categoria: Categoria;
  quantidade: number;
  pathImagem: String;
  capacidade: String;

  constructor(id: number, nome: string, descricao: string, valor: number,
              categoria: Categoria, pathImagem: String, capacidade: String, quantidade: number = 1) {
      this.id = id;
      this.nome = nome;
      this.descricao = descricao;
      this.valor = valor;
      this.categoria = categoria;
      this.quantidade = quantidade;
      this.pathImagem = pathImagem;
      this.capacidade = capacidade;
  }
}
