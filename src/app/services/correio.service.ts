import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { EnderecoWs } from '../domain/enderecoWs';

@Injectable()
export class CorreioService {

  constructor(private http: Http) { }

  buscarCep(cep: number): Promise<EnderecoWs> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise().
      then(response => {
        const enderecoWs = new EnderecoWs();
        const endereco = response.json();
        if (response.json().erro) {
          enderecoWs.error = response.json().erro;
        } else {
          enderecoWs.logradouro = endereco.logradouro;
          enderecoWs.complemento = endereco.complemento;
          enderecoWs.bairro = endereco.bairro;
          enderecoWs.localidade = endereco.localidade;
          enderecoWs.uf = endereco.uf;
        }
        return enderecoWs;
      });
  }

}
