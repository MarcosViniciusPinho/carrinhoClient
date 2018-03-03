import { ProdutoCarrinho } from './produtoCarrinho';
import { Usuario } from './usuario';

export class Carrinho {
  usuario: Usuario;
  produtos: ProdutoCarrinho[];

  constructor(usuario: Usuario, produtos: ProdutoCarrinho[]) {
     this.usuario = usuario;
     this.produtos = produtos;
  }
}
