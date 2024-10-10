import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TemaService } from '../../../../services/preguntados/tema.service';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements AfterViewInit {
  @ViewChild('ruleta') ruletaRef!: ElementRef<HTMLImageElement>; // Referencia a la ruleta
  // @Output() temaSeleccionado = new EventEmitter<string>(); // Emitir evento
  private isSpinning = false; // Variable para controlar si la ruleta está girando

  constructor(private router: Router, private temaService: TemaService) { }


  private temas: string[] = [
    'Americas',
    'Europe',
    'Asia',
    'Oceania',
    'Africa',
  ];

  ngAfterViewInit() {
    const ruleta = this.ruletaRef.nativeElement;
    ruleta.addEventListener('click', () => this.girar());
  }

  girar() {
    if (this.isSpinning) return; // Si ya está girando, no hacer nada
    this.isSpinning = true; // Marcar que la ruleta está girando

    const rand = Math.random() * 7200; // Gira entre 0 y 7200 grados
    this.calcular(rand);
  }

  tematica(data: string) {
    console.log('TEMATICA SELECCIONADA: ' + data);
    this.temaService.seleccionarTema(data); // Envía el tema al servicio
  }

  calcular(rand: number) {
    const valor = (rand % 360); // Normaliza el ángulo a 360 grados
    const ruleta = this.ruletaRef.nativeElement;
    ruleta.style.transform = `rotate(${rand}deg)`; // Aplica la rotación a la ruleta

    setTimeout(() => {
      const index = this.obtenerTema(valor);
      const temaSeleccionado = this.temas[index]; // Usa la lista de temas
      this.tematica(temaSeleccionado);
      console.log('TEMA SELECCIONADO: ' + temaSeleccionado);
      this.isSpinning = false; // Permitir girar nuevamente
    }, 5000); // Ajusta el tiempo si es necesario
  }

  obtenerTema(valor: number): number {
    const segmentos = this.temas.length; // Total de secciones en la ruleta
    const rangoPorTema = 360 / segmentos; // Cada tema abarca un rango de 360° / número de temas

    // Ajuste para que coincida con la orientación de la ruleta
    const anguloAjustado = (360 - valor + 24.71) % 360; // Esto ajusta el ángulo para que coincida con la orientación de la ruleta

    // Determina el índice del tema basado en el ángulo ajustado
    return Math.floor(anguloAjustado / rangoPorTema) % segmentos; // Asegúrate de que el índice esté dentro del rango
}

}
