import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanderasService {
  private baseUrl = 'https://restcountries.com/v3.1/region';

  constructor(private http: HttpClient) { }

  obtenerBanderasPorContinente(continente: string): Observable<any> {
    const url = `${this.baseUrl}/${continente}`;
    return this.http.get<any>(url);
  }

  obtenerBandera(pais: string): Observable<any> {
    const url = `https://restcountries.com/v3.1/name/${pais}?fullText=true`;
    return this.http.get<any>(url);
  }
}
