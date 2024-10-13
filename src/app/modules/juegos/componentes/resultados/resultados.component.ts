import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, query, orderBy, limit } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Timestamp } from 'firebase/firestore';

interface Resultado {
  email: string;
  fecha: Timestamp;
  juego: string;
  puntos: number;
  username: string;
}

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  resultados$: Observable<Resultado[]> = new Observable<Resultado[]>();
  ranking: Resultado[] = [];
  selectedGame: string = '';

  constructor(private firestore: Firestore) {
    this.loadResultados();
  }

  ngOnInit(): void {}

  loadResultados() {
    const resultadosRef = collection(this.firestore, 'resultados');
    const q = query(resultadosRef, orderBy('fecha', 'desc'), limit(10));
    this.resultados$ = collectionData(q, { idField: 'id' }) as Observable<Resultado[]>;
  }

  showRanking(juego: string) {
    this.selectedGame = juego;
    const resultadosRef = collection(this.firestore, 'resultados');
    const q = query(resultadosRef, orderBy('puntos', 'desc'));
    
    collectionData(q, { idField: 'id' }).subscribe((data: Resultado[]) => {
      this.ranking = data.filter(r => r.juego === juego).slice(0, 3);
    });
  }

  convertTimestampToDate(timestamp: any): Date {
    if (timestamp && timestamp.seconds) {
      return new Date(timestamp.seconds * 1000);
    }
    return new Date();
  }
}
