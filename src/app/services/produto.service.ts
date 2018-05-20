import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

import { Produto } from '../domain/produto';

@Injectable()
export class ProdutoService {

  produtoUrl = 'http://localhost:8081/carrinhoAPI/produtos';

  constructor(private http: AuthHttp) { }

  list(campoPesquisa = ''): Promise<Produto[]> {
    return this.http.get(`${this.produtoUrl}?nome=${campoPesquisa}`).toPromise().
      then(response => response.json())
      .catch(response => { 
        throw response.json()
      });
  }

}
