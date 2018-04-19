import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Estado } from '../domain/estado';

@Injectable()
export class EstadoService {

  estadoUrl = 'http://localhost:8083/localidadeAPI/estados';

  constructor(private http: Http) { }

  list(): Promise<Estado[]> {
    return this.http.get(`${this.estadoUrl}`).toPromise().
      then(response => response.json())
      .catch(response => { 
        throw response.json()
      });
  }

}
