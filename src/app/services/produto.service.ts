import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Produto } from '../domain/produto';

/* import 'rxjs/add/operator/toPromisse'; */

@Injectable()
export class ProdutoService {

  produtoUrl = 'http://localhost:8081/carrinhoAPI/produtos';

  constructor(private http: Http) { }

  list(): Promise<any> {
    return this.http.get(`${this.produtoUrl}`).toPromise().
      then(response => response.json());
  }
}
