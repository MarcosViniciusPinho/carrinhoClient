import { ProdutoCarrinho } from './produtoCarrinho';
import { Usuario } from './usuario';

export class Carrinho {
  id: number;
  usuario: Usuario;
  produtos: ProdutoCarrinho[];

  constructor(id: number, usuario: Usuario, produtos: ProdutoCarrinho[]) {
     this.id = id;
     this.usuario = usuario;
     this.produtos = produtos;
  }
}
