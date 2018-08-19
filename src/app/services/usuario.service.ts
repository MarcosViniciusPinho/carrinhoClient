import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

import { Usuario } from '../domain/usuario';

import { environment } from './../../environments/environment.prod';

@Injectable()
export class UsuarioService {

  usuarioUrl: string;

  constructor(private http: AuthHttp) {
    this.usuarioUrl = `${environment.urlCarrinhoApi}/carrinhoAPI/usuarios`;
   }

  create(usuario: Usuario): Promise<Usuario> {
    return this.http.post(this.usuarioUrl, usuario).toPromise().
      then(response => response.json());
  }

}
