import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TemaService } from '../../../../services/preguntados/tema.service';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements AfterViewInit {
  @ViewChild('ruleta') ruletaRef!: ElementRef<HTMLImageElement>;
  // @Output() temaSeleccionado = new EventEmitter<string>(); // Emitir evento

  constructor(private router: Router, private temaService: TemaService) { }


  private temas: string[] = [
    'Historia',
    'Deportes',
    'Arte',
    'Entretenimiento',
    'Corona',
    'Geografía',
    'Ciencia'
  ];

  ngAfterViewInit() {
    const ruleta = this.ruletaRef.nativeElement;
    ruleta.addEventListener('click', () => this.girar());
  }

  girar() {
    const rand = Math.random() * 7200; // Gira entre 0 y 7200 grados
    this.calcular(rand);
  }

  premio(premios: string) {
    // document.querySelector('.elije')!.innerHTML = 'TU CORTESIA ES: ' + premios;
    console.log('TEMATICA SELECCIONADA: ' + premios);
    this.temaService.seleccionarTema("Geografía"); // Envía el tema al servicio
  }

  calcular(rand: number) {
    const valor = (rand % 360); // Normaliza el ángulo a 360 grados
    const ruleta = this.ruletaRef.nativeElement;
    ruleta.style.transform = `rotate(${rand}deg)`; // Aplica la rotación a la ruleta

    setTimeout(() => {
      const index = this.obtenerTema(valor);
      const temaSeleccionado = this.temas[index]; // Usa la lista de temas
      this.premio(temaSeleccionado);
    }, 5000); // Ajusta el tiempo si es necesario
  }

  obtenerTema(valor: number): number {
    const segmentos = this.temas.length; // Total de secciones en la ruleta
    const rangoPorTema = 360 / segmentos; // Cada tema abarca un rango de 360°/7

    const anguloAjustado = (360 - valor + 25.71) % 360; // Ajuste para que coincida con la vara
    return Math.floor(anguloAjustado / rangoPorTema); // Devuelve el índice del tema
  }
}
