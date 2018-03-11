import { ProdutoCarrinho } from './produtoCarrinho';
import { Usuario } from './usuario';
import { Endereco } from './endereco';

export class Carrinho {
  usuario: Usuario;
  produtoCarrinhoList: ProdutoCarrinho[];
  endereco: Endereco;

  constructor(usuario: Usuario, produtoCarrinhoList: ProdutoCarrinho[], endereco: Endereco) {
     this.usuario = usuario;
     this.produtoCarrinhoList = produtoCarrinhoList;
     this.endereco = endereco;
  }
}
