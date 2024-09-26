import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private deckId: string = '';

  constructor(private http: HttpClient) {
    this.crearMazo();
  }

  crearMazo(): void {
    this.http
      .get<{ deck_id: string }>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .subscribe((response) => {
        this.deckId = response.deck_id;
      });
  }

  sacarCarta(): Observable<any> {
    return this.http.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`);
  }
}
