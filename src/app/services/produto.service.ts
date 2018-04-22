import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Produto } from '../domain/produto';

@Injectable()
export class ProdutoService {

  produtoUrl = 'http://localhost:8081/carrinhoAPI/produtos';

  constructor(private http: Http) { }

  list(campoPesquisa = ''): Promise<Produto[]> {
    return this.http.get(`${this.produtoUrl}?nome=${campoPesquisa}`).toPromise().
      then(response => response.json())
      .catch(response => { 
        throw response.json()
      });
  }

}
