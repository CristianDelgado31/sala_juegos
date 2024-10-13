import { Component, OnInit } from '@angular/core';
import { TemaService } from '../../../../services/preguntados/tema.service';

@Component({
  selector: 'app-preguntados-main',
  templateUrl: './preguntados-main.component.html',
  styleUrl: './preguntados-main.component.css'
})
export class PreguntadosMainComponent implements OnInit{
  temaSeleccionado: string | null = null;
  juegoIniciado: boolean = false; // Nueva variable

  constructor(private temaService: TemaService) { }

  ngOnInit() {
    this.temaService.temaSeleccionado$.subscribe(tema => {
      this.temaSeleccionado = tema;
    });
  }

  iniciarJuego() {
    this.juegoIniciado = true; // Cambia a true al hacer clic
    // También puedes inicializar cualquier otra lógica que necesites aquí
  }

}
