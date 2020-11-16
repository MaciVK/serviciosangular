import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Empleado } from './../../models/Empleado';
import { EmpleadoService } from './../../services/empleado.service';

@Component({
  selector: 'app-empleados-salario',
  templateUrl: './empleados-salario.component.html',
  styleUrls: ['./empleados-salario.component.css'],
  providers: [EmpleadoService],
})
export class EmpleadosSalarioComponent implements OnInit {
  public empleados: Array<Empleado>;
  public oficios: Array<string>;
  @ViewChild('cajaSalario') cajasalario: ElementRef;
  @ViewChild('selectOficio') selectOficio: ElementRef;
  buscarEmpleados() {
    var salario = this.cajasalario.nativeElement.value;
    this._service.getEmpleadosSalario(salario).subscribe(
      (respuesta) => {
        this.empleados = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getOficios() {
    this._service.getOficios().subscribe(
      (respuesta) => {
        this.oficios = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getEmpleadosOficios() {
    var oficio = this.selectOficio.nativeElement.value;
    this._service.getEmpleadosOficios(oficio).subscribe(
      (respuesta) => {
        this.empleados = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  constructor(private _service: EmpleadoService) {
    this.empleados = [];
  }

  ngOnInit(): void {
    this.getOficios();
  }
}
