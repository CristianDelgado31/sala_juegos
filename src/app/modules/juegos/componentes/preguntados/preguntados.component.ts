import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TemaService } from '../../../../services/preguntados/tema.service';
import { BanderasService } from '../../../../services/preguntados/banderas.service';
import { Firestore, addDoc, collection, Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit, OnDestroy {
  @Input() tema!: string; // Recibe el continente seleccionado como entrada
  preguntaActual: { pregunta: string, opciones: string[], respuestaCorrecta: string, imagen?: string } | null = null;
  mensaje: string | null = null;
  banderaUrl: string | null = null;
  puedeSeleccionar: boolean = true;
  preguntasRespondidas: string[] = [];
  puntaje: number = 0;
  paises: any[] = [];
  vidas: number = 3; // Inicializa con 3 vidas
  juegoTerminado: boolean = false; // Controla si el juego ha terminado

  constructor(private temaService: TemaService, private banderasService: BanderasService, 
              private firebase: Firestore) {}

  ngOnInit() {
    this.obtenerPaisesPorContinente();
  }

  obtenerPaisesPorContinente() {
    this.banderasService.obtenerBanderasPorContinente(this.tema).subscribe(paises => {
      this.paises = paises;
      this.cargarPregunta();
    });
  }

  cargarPregunta() {
    if (this.preguntasRespondidas.length >= this.paises.length) {
      this.mensaje = 'Has respondido todas las preguntas. ¡Gracias por jugar!';
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * this.paises.length);
    const paisSeleccionado = this.paises[randomIndex];
  
    if (this.preguntasRespondidas.includes(paisSeleccionado.name.common)) {
      this.cargarPregunta(); // Vuelve a intentar cargar una pregunta
      return;
    }
  
    const nombreEnEspanol = paisSeleccionado.translations?.spa?.common || paisSeleccionado.name.common;
  
    this.preguntaActual = {
      pregunta: `¿Cuál es la capital de ${nombreEnEspanol}?`,
      opciones: this.generarOpciones(paisSeleccionado), // Cambiado aquí
      respuestaCorrecta: paisSeleccionado.capital[0],
      imagen: paisSeleccionado.flags.svg
    };
  
    this.preguntasRespondidas.push(nombreEnEspanol);
    this.banderaUrl = paisSeleccionado.flags.svg;
  }
  

  generarOpciones(paisSeleccionado: any): string[] {
    const opciones = new Set<string>();
    const capitalCorrecta = paisSeleccionado.capital[0];
    // 

    if (capitalCorrecta) {
      opciones.add(capitalCorrecta); // Añade la capital correcta
    }
  
    // Generar opciones aleatorias hasta tener 3
    while (opciones.size < 3) {
      const randomIndex = Math.floor(Math.random() * this.paises.length);
      const paisAleatorio = this.paises[randomIndex];
  
      // Asegúrate de que el país no sea el mismo y que la capital no esté ya en opciones
      if (paisAleatorio.name.common !== paisSeleccionado.name.common && paisAleatorio.capital.length > 0) {
        opciones.add(paisAleatorio.capital[0]);
      }
    }
  
    // Convertir el Set a un Array y mezclarlo
    const opcionesArray = Array.from(opciones);
    return this.mezclarOpciones(opcionesArray);
  }
  
  // Método para mezclar opciones
  mezclarOpciones(opciones: string[]): string[] {
    for (let i = opciones.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opciones[i], opciones[j]] = [opciones[j], opciones[i]]; // Intercambia elementos
    }
    return opciones;
  }
  
  
  

  verificarRespuesta(opcion: string) {
    if (this.preguntaActual && this.puedeSeleccionar && !this.juegoTerminado) {
      this.puedeSeleccionar = false;

      if (opcion === this.preguntaActual.respuestaCorrecta) {
        this.mensaje = '¡Respuesta Correcta!';
        this.puntaje += 50;
      } else {
        this.vidas -= 1; // Restar una vida
        this.mensaje = `Respuesta Incorrecta. Te quedan ${this.vidas} vidas.`;

        if (this.vidas === 0) {
          this.juegoTerminado = true; // Termina el juego
          this.mensaje = '¡Has perdido! Juego terminado.';

          // Guardar puntaje en la base de datos
          this.guardarPuntaje();
        }
      }

      setTimeout(() => {
        this.mensaje = null;
        if (!this.juegoTerminado) {
          this.cargarPregunta();
        }
        this.puedeSeleccionar = true;
      }, 2000);
    }
  }

  reiniciarJuego() {
    this.ngOnDestroy();
  }

  ngOnDestroy() {
    this.temaService.limpiarTema();
  }

  guardarPuntaje(): void {
    const user = JSON.parse(localStorage.getItem('user')!);
    const username = user.email.split('@')[0];
    const fecha = Timestamp.fromDate(new Date());

    const resultado = { email: user.email, fecha: fecha, juego: 'preguntados', puntos: this.puntaje, username: username };
    const col = collection(this.firebase, 'resultados');
    addDoc(col, resultado);
  }
}
