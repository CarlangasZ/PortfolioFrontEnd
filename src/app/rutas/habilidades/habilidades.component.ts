import { Component, OnInit } from '@angular/core';
import { HabilidadService } from './habilidad.service';
import { Habilidad } from './habilidad';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  habilidad: Habilidad[] = [];
  habilidad1: Habilidad | undefined;
  habilidad2: Habilidad | undefined;
  habilidad3: Habilidad | undefined;
  habilidad4: Habilidad | undefined;

  constructor(private habilidadService: HabilidadService) { }

  ngOnInit(): void {

    this.obtenerHabilidadPorId(1);
    this.obtenerHabilidadPorId(2);
    this.obtenerHabilidadPorId(3);
    this.obtenerHabilidadPorId(4);

  }

  obtenerHabilidadPorId(id: number): void {

    this.habilidadService.obtenerHabilidadPorId(id).subscribe(habilidad => {

      if(id === 1){

        this.habilidad1 = habilidad;

      }else if(id === 2){

        this.habilidad2 = habilidad;

      }else if(id === 3){

        this.habilidad3 = habilidad;

      }else if(id === 4){

        this.habilidad4 = habilidad;

      }

    });

  }

}
