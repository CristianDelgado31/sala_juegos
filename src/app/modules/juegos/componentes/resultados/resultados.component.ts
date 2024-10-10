import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Timestamp } from 'firebase/firestore'; // Importa Timestamp

interface Resultado {
  email: string;
  fecha: Timestamp; // Cambia esto a Timestamp
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
  resultados$: Observable<Resultado[]>;

  constructor(private firestore: Firestore) {
    const resultadosRef = collection(firestore, 'resultados');
    this.resultados$ = collectionData(resultadosRef, { idField: 'id' }) as Observable<Resultado[]>;
  }

  ngOnInit(): void {
    // No necesitas hacer nada más aquí
  }

  convertTimestampToDate(timestamp: any): Date {
    if (timestamp && timestamp.seconds) {
      return new Date(timestamp.seconds * 1000);
    }
    return new Date(); // Devuelve la fecha actual si no se proporciona un timestamp válido
  }
}
