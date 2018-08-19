import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

import { Produto } from '../domain/produto';

import { environment } from './../../environments/environment.prod';

@Injectable()
export class ProdutoService {

  produtoUrl: string;

  constructor(private http: AuthHttp) {
    this.produtoUrl = `${environment.urlCarrinhoApi}/carrinhoAPI/produtos`;
   }

  list(campoPesquisa = ''): Promise<Produto[]> {
    return this.http.get(`${this.produtoUrl}?nome=${campoPesquisa}`).toPromise().
      then(response => response.json());
  }

}
