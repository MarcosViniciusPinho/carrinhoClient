import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CorreioService {

  constructor(private http: Http) { }

  buscarCep(cep: number): Promise<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise().
      then(response => response.json());
  }

}
