import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from './../../services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonaService],
})
export class PersonasComponent implements OnInit {
  public personas: Array<Persona>;
  constructor(private _service: PersonaService) {}

  ngOnInit(): void {
    // this._service.mostrarMensaje();
    this._service.getPersonas().subscribe(
      (respuesta) => {
        this.personas = respuesta;
        console.log(respuesta);
      },
      (error) => {
        console.log('Ha habido un error en la peticion ' + error);
      }
    );
  }
}
