import { Endereco } from './endereco';

export class Usuario {
  id: number;
  nome: string;
  sobrenome: string;
  login: string;
  senha: string;
  endereco: Endereco;

  constructor () {}
}
