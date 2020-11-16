import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class EmpleadoService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlEmpleados;
  }
  getEmpleadosSalario(salario): Observable<any> {
    var request = 'api/Empleados/EmpleadosSalario/' + salario;
    console.log(this.url + request);
    return this._http.get(this.url + request);
  }
  getOficios(): Observable<any> {
    var request = 'api/Empleados/oficios';
    return this._http.get(this.url + request);
  }
  getEmpleadosOficios(oficio): Observable<any> {
    var request = 'api/Empleados/EmpleadosOficio/' + oficio;
    console.log(this.url + request);
    return this._http.get(this.url + request);
  }
}
