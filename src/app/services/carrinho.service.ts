import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Carrinho } from '../domain/carrinho';

@Injectable()
export class CarrinhoService {

  carrinhoUrl = 'http://localhost:8081/carrinhoAPI/carrinhos';

  constructor(private http: Http) { }

  create(carrinho: Carrinho): Promise<Carrinho> {
    return this.http.post(this.carrinhoUrl, carrinho).toPromise().
      then(response => response.json());
  }

}
