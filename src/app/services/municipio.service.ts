import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Municipio } from '../domain/municipio';

import { environment } from './../../environments/environment.prod';

@Injectable()
export class MunicipioService {

  municipioUrl: string;

  constructor(private http: Http) {
    this.municipioUrl = `${environment.urlLocalidadeApi}/localidadeAPI/municipios`;
  }

  listByEstado(estado: String): Promise<Municipio[]> {
    return this.http.get(`${this.municipioUrl}/${estado}`).toPromise().
      then(response => response.json())
      .catch(response => {
        throw response.json();
      });
  }

}
