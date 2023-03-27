import { Component, OnInit, ViewChild } from '@angular/core';
import { ExperienciaService } from './experiencia.service';
import { Experiencia } from './experiencia';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  @ViewChild("experienciaForm")experienciaForm!: NgForm;

  experiencias: Experiencia[] = [];
  experiencia: Experiencia = new Experiencia();

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {

    this.experienciaService.getExperiencias().subscribe((data:Experiencia[]) => {

      this.experiencias = data;
      console.log(this.experiencias);

    });

  }


}
