import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './../models/Persona';
import { Global } from './global';

@Injectable()
export class PersonaService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlPersonas;
  }

  mostrarMensaje() {
    console.log('Servicio HTTP');
  }

  //EL METODO PUEDE TENER TIPADO, es decir :tipodato
  //En este caso, es un tipo Observable, que es una colección, de <any>
  getPersonas(): Observable<any> {
    var request = 'api/personas';
    return this._http.get(this.url + request);
  }
}
