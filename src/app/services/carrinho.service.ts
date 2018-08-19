import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

import { Carrinho } from '../domain/carrinho';

import { environment } from './../../environments/environment.prod';

@Injectable()
export class CarrinhoService {

  carrinhoUrl: string;

  constructor(private http: AuthHttp) {
    this.carrinhoUrl = `${environment.urlCarrinhoApi}/carrinhoAPI/carrinhos`;
  }

  create(carrinho: Carrinho): Promise<Carrinho> {
    return this.http.post(this.carrinhoUrl, carrinho).toPromise().
      then(response => response.json());
  }

}
