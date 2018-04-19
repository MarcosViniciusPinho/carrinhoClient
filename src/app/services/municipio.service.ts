import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Municipio } from '../domain/municipio';

@Injectable()
export class MunicipioService {

  municipioUrl = 'http://localhost:8083/localidadeAPI/municipios';

  constructor(private http: Http) { }

  listByEstado(estado: String): Promise<Municipio[]> {
    return this.http.get(`${this.municipioUrl}/${estado}`).toPromise().
      then(response => response.json())
      .catch(response => { 
        throw response.json()
      });
  }

}
