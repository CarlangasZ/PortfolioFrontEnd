import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit {

  contenidoVisible = true;

  alternarContenido(){

    this.contenidoVisible = !this.contenidoVisible;

  }

  mostrarAnterior(){

    this.contenidoVisible = true;

  }

  constructor() { }

  ngOnInit(): void {

  }

}
