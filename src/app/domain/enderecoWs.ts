export class EnderecoWs {
  logradouro: String;
  complemento: String;
  bairro: String;
  localidade: String;
  uf: String;

  constructor(logradouro: String, complemento: String, bairro: String, localidade: String,
              uf: String) {
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.bairro = bairro;
    this.localidade = localidade;
    this.uf = uf;
  }

}
