import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

import { Carrinho } from '../domain/carrinho';

@Injectable()
export class CarrinhoService {

  carrinhoUrl = 'http://localhost:8081/carrinhoAPI/carrinhos';

  constructor(private http: AuthHttp) { }

  create(carrinho: Carrinho): Promise<Carrinho> {
    return this.http.post(this.carrinhoUrl, carrinho).toPromise().
      then(response => response.json());
  }

}
