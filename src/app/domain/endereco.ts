import { Usuario } from './usuario';

export class Endereco {
  cep: number;
  logradouro: String;
  complemento: String;
  bairro: String;
  municipio: String;
  estado: String;

  constructor(cep: number, logradouro: String, complemento: String, bairro: String,
              municipio: String, estado: String) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.bairro = bairro;
    this.municipio = municipio;
    this.estado = estado;
  }
}
