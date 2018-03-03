export class Usuario {
  id: number;
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  login: string;
  senha: string;

  constructor(id: number, nome: string, sobrenome: string, dataNascimento: Date, login: string) {
      this.id = id;
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.dataNascimento = dataNascimento;
      this.login = login;
  }
}
