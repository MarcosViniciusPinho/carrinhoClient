import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Usuario } from '../domain/usuario';
import { JwtHelper } from 'angular2-jwt';

import { environment } from './../../environments/environment.prod';

@Injectable()
export class AuthService {

  oauthTokenUrl: string;
  jwtPayload: any;

  constructor(private http: Http, private jwtHelper: JwtHelper) {
    this.getTokenInLocalStorage();
    this.oauthTokenUrl = `${environment.urlCarrinhoApi}/carrinhoAPI/oauth/token`;
  }

  login(usuario: Usuario): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpzdmI='); // Usuario e senha encodada do client desta aplicação

    const body = `username=${usuario.login}&password=${usuario.senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.setTokenInLocalStorage(response.json().access_token);
      })
      .catch(response => {
        if (response.status === 400) {
          const responseJson = response.json();
          if (responseJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }
        return Promise.reject(response);
      });
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpzdmI='); // Usuario e senha encodada do client desta aplicação

    const body = 'grant_type=refresh_token';

    return this.http.post(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.setTokenInLocalStorage(response.json().access_token);

        console.log('Novo access token criado!');

        return Promise.resolve(null);
      })
      .catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve(null);
      });
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
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

  clearAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

}
