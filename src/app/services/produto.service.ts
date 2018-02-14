import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Produto } from '../domain/produto';

@Injectable()
export class ProdutoService {

  produtoUrl = 'http://localhost:8081/carrinhoAPI/produtos';

  constructor(private http: Http) { }

  list(): Promise<Produto[]> {
    return this.http.get(`${this.produtoUrl}`).toPromise().
      then(response => response.json());
  }

  pesquisarComParametros(campoPesquisa): Promise<Produto[]>  {
    return this.http.get(`${this.produtoUrl}?nome=${campoPesquisa}&descricao=${campoPesquisa}`).toPromise().
    then(response => response.json());
  }
}
