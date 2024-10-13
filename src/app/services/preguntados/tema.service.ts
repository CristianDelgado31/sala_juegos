import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private temaSeleccionadoSubject = new BehaviorSubject<string | null>(null);
  temaSeleccionado$ = this.temaSeleccionadoSubject.asObservable();

  seleccionarTema(tema: string) {
    this.temaSeleccionadoSubject.next(tema);
  }

  limpiarTema() {
    this.temaSeleccionadoSubject.next(null);
  }
}
