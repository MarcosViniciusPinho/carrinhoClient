import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Usuario } from '../domain/usuario';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://localhost:8081/carrinhoAPI/oauth/token';
  jwtPayload: any;

  constructor(private http: Http, private jwtHelper: JwtHelper) { 
    this.getTokenInLocalStorage();
  }

  login(usuario: Usuario): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpzdmI=');//Usuario e senha encodada do client desta aplicação

    const body = `username=${usuario.login}&password=${usuario.senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        this.setTokenInLocalStorage(response.json().access_token);
      })
      .catch(response => {
        console.log(response);
      });
  }

  private setTokenInLocalStorage(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private getTokenInLocalStorage() {
    const token = localStorage.getItem('token');

    if (token) {
      this.setTokenInLocalStorage(token);
    }
}
}