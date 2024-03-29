import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from './habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private apiURL = 'https://portfoliobackend-ijlb.onrender.com';

  constructor(private http: HttpClient) { }

  obtenerHabilidadPorId(id: number):Observable<Habilidad> {

    return this.http.get<Habilidad>(`${this.apiURL}/${id}`);

  }

}
