export class Experiencia {

  id?: number;
  titulo: String;
  descripcion: String;
  fechaInicio: Date ;
  fechaFin: Date;

  constructor() {
  this.id = 0;
  this.titulo = '';
  this.descripcion = '';
  this.fechaInicio = new Date();
  this.fechaFin = new Date();
  }
}
