import { Usuario } from './usuario';

export class Endereco {
  cep: String;
  logradouro: String;
  complemento: String;
  bairro: String;
  municipio: String;
  estado: String;

  constructor(cep: String, logradouro: String, complemento: String, bairro: String,
              municipio: String, estado: String) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.bairro = bairro;
    this.municipio = municipio;
    this.estado = estado;
  }
}
