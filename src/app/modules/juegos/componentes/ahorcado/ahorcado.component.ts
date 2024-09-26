import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent {
  palabras: { [key: string]: string[] } = {
    animales: [
      'perro', 'gato', 'elefante', 'leon', 'delfin',
      'tigre', 'conejo', 'caballo', 'jirafa', 'ballena'
    ],
    frutas: [
        'manzana', 'banana', 'naranja', 'frutilla', 'uva',
        'kiwi', 'mango', 'piña', 'cereza', 'sandia'
    ],
    paises: [
        'espana', 'mexico', 'japon', 'brasil', 'canada',
        'francia', 'italia', 'alemania', 'argentina', 'chile'
    ],
    deportes: [
        'futbol', 'baloncesto', 'tenis', 'natacion', 'ciclismo',
        'voleibol', 'golf', 'boxeo', 'rugby', 'escalada'
    ]
  };

  palabraActual: string = '';
  letrasAdivinadas: string[] = [];
  intentos: number = 0;
  maxIntentos: number = 6;
  alfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  mensaje: string = '';
  perdio: boolean = false;
  gano: boolean = false;
  topicoSeleccionado: string = '';
  juegoIniciado: boolean = false;

  iniciarJuego() {
    this.juegoIniciado = true;
    this.seleccionarPalabra();
  }

  seleccionarPalabra() {
    if (this.topicoSeleccionado) {
      const randomIndex = Math.floor(Math.random() * this.palabras[this.topicoSeleccionado].length);
      this.palabraActual = this.palabras[this.topicoSeleccionado][randomIndex];
      this.letrasAdivinadas = [];
      this.intentos = 0;
      this.mensaje = '';
      this.perdio = false;
      this.gano = false; // Reiniciar el estado de "gano"
    }
  }

  letraAdivinada(letra: string): boolean {
    return this.letrasAdivinadas.includes(letra);
  }

  adivinarLetra(letra: string) {
    if (!this.letrasAdivinadas.includes(letra) && !this.perdio && !this.gano) {
      this.letrasAdivinadas.push(letra);
      if (!this.palabraActual.includes(letra)) {
        this.intentos++;
      }
      this.verificarEstadoJuego();
    }
  }

  verificarEstadoJuego() {
    if (this.intentos >= this.maxIntentos) {
      this.perdio = true;
      this.mensaje = '¡Perdiste! La palabra era: ' + this.palabraActual;
    } else if (this.palabraActual.split('').every(letra => this.letraAdivinada(letra))) {
      this.gano = true;
      this.mensaje = '¡Ganaste! La palabra era: ' + this.palabraActual;
    }
  }

  getImagen(): string {
    return `images/ahorcado/ahorcado${this.intentos}.jpg`;
  }

  reiniciarJuego() {
    this.juegoIniciado = false;
    this.topicoSeleccionado = '';
    this.letrasAdivinadas = [];
    this.intentos = 0;
    this.mensaje = '';
    this.perdio = false;
    this.gano = false;
  }

}

