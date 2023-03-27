import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiURL = 'http://localhost:8080/experiencias';

  constructor(private http: HttpClient) { }

    getExperiencias(): Observable<Experiencia[]> {

      return this.http.get<Experiencia[]>(this.apiURL);

    }

}
