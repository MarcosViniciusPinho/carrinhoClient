import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from '../domain/usuario';

@Injectable()
export class UsuarioService {

  usuarioUrl = 'http://localhost:8081/carrinhoAPI/usuarios';

  constructor(private http: Http) { }

  create(usuario: Usuario): Promise<Usuario> {
    return this.http.post(this.usuarioUrl, usuario).toPromise().
      then(response => response.json())
      .catch(response => { 
        throw response.json()
      });
  }

}
