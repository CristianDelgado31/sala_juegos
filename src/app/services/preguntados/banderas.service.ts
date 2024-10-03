import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanderasService {
  private baseUrl = 'https://restcountries.com/v3.1/name';

  constructor(private http: HttpClient) { }

  obtenerBandera(pais: string): Observable<any> {
    const url = `${this.baseUrl}/${pais}`;
    return this.http.get<any>(url);
  }
}
