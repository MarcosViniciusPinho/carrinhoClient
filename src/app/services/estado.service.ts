import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Estado } from '../domain/estado';

import { environment } from './../../environments/environment.prod';

@Injectable()
export class EstadoService {

  estadoUrl: string;

  constructor(private http: Http) {
    this.estadoUrl = `${environment.urlLocalidadeApi}/localidadeAPI/estados`;
  }

  list(): Promise<Estado[]> {
    return this.http.get(`${this.estadoUrl}`).toPromise().
      then(response => response.json())
      .catch(response => {
        throw response.json();
      });
  }

}
