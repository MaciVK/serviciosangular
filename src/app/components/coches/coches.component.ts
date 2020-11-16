import { Component, OnInit } from '@angular/core';
import { CocheService } from './../../services/coche.service';
import { Coche } from './../../models/Coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [CocheService],
})
export class CochesComponent implements OnInit {
  public coches: Array<Coche>;
  constructor(private _cocheService: CocheService) {}

  ngOnInit(): void {
    this._cocheService.getCoches().subscribe(
      (respuesta) => {
        this.coches = respuesta;
      },
      (error) => {
        console.log('Hay un error ' + error);
      }
    );
  }
}
