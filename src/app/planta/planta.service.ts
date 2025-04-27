import { Injectable } from '@angular/core';
import { Planta } from '../modelo/planta';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

constructor(private http: HttpClient) { }

private apiUrl = environment.baseUrl;
getPlantas(): Observable<Planta[]> {
  return this.http.get<Planta[]>(this.apiUrl);
}

}