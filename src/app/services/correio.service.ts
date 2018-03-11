import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { EnderecoWs } from '../domain/enderecoWs';

@Injectable()
export class CorreioService {

  constructor(private http: Http) { }

  buscarCep(cep: number): Promise<EnderecoWs> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise().
      then(response => {
        const endereco = response.json();
        return new EnderecoWs(endereco.logradouro, endereco.complemento, endereco.bairro,
          endereco.localidade, endereco.uf);
      });
  }

}
