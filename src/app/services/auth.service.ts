import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Usuario } from '../domain/usuario';

@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://localhost:8081/carrinhoAPI/oauth/token';

  constructor(private http: Http) { }

  login(usuario: Usuario): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpzdmI=');//Usuario e senha encodada do client desta aplicação

    const body = `username=${usuario.login}&password=${usuario.senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  }

}