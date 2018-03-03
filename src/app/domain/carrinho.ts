import { ProdutoCarrinho } from './produtoCarrinho';
import { Usuario } from './usuario';

export class Carrinho {
  usuario: Usuario;
  produtoCarrinhoList: ProdutoCarrinho[];

  constructor(usuario: Usuario, produtoCarrinhoList: ProdutoCarrinho[]) {
     this.usuario = usuario;
     this.produtoCarrinhoList = produtoCarrinhoList;
  }
}
