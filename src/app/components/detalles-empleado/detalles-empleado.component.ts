import { Component, OnInit } from '@angular/core';
import { EmpleadoRoutingService } from './../../services/empleadorouting.service';
import { Empleado } from './../../models/Empleado';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css'],
  providers: [EmpleadoRoutingService],
})
export class DetallesEmpleadoComponent implements OnInit {
  public empleado: Empleado;
  constructor(
    private _service: EmpleadoRoutingService,
    private _activeRoute: ActivatedRoute
  ) {}

  buscarEmpleado(empno) {
    this._service.buscarEmpleado(empno).subscribe(
      (response) => {
        this.empleado = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      var empno = params.empno;
      this.buscarEmpleado(empno);
    });
  }
}
