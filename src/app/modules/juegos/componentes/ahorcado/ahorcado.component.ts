import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, where, orderBy, limit, query, doc, setDoc, Timestamp} from '@angular/fire/firestore';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent {
  palabras: { [key: string]: string[] } = {
    animales: ['perro', 'gato'],
    frutas: ['manzana', 'banana', 'naranja', 'frutilla', 'uva'],
    paises: ['espana', 'mexico', 'japon', 'brasil', 'canada'],
    deportes: ['futbol', 'baloncesto', 'tenis', 'natacion', 'ciclismo']
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
  puntos: number = 0; // Puntos acumulados
  resultados: Array<{ puntaje: number; topico: string }> = []; // Registro de resultados

  constructor(private firestore: Firestore) { }

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
      this.gano = false;
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
      } else {
        // Sumar puntos por letra correcta
        this.puntos += 10; // Asigna un puntaje por letra correcta
      }
      this.verificarEstadoJuego();
    }
  }

  verificarEstadoJuego() {
    if (this.intentos >= this.maxIntentos) {
      this.perdio = true;
      this.mensaje = '¡Perdiste! La palabra era: ' + this.palabraActual;
      // Guardar resultado
      this.resultados.push({ puntaje: this.puntos, topico: this.topicoSeleccionado });
    } else if (this.palabraActual.split('').every(letra => this.letraAdivinada(letra))) {
      this.gano = true;
      this.mensaje = '¡Ganaste! La palabra era: ' + this.palabraActual;
      // Sumar puntos por ganar y guardar resultado
      this.puntos += 50; // Asigna un puntaje por ganar
      this.resultados.push({ puntaje: this.puntos, topico: this.topicoSeleccionado });
      console.log(this.resultados);
      // Seleccionar nueva palabra
      this.seleccionarPalabra();
    }
  }

  getImagen(): string {
    return `images/ahorcado/hangman${this.intentos}.png`;
  }

  reiniciarJuego() {
    // Acá se guardarian los datos del juego actual
    this.guardarResultados();
    this.juegoIniciado = false;
    this.topicoSeleccionado = '';
    this.letrasAdivinadas = [];
    this.intentos = 0;
    this.mensaje = '';
    this.perdio = false;
    this.gano = false;
    this.puntos = 0; // Reiniciar puntos
  }

  guardarResultados() : void{
    const user = JSON.parse(localStorage.getItem('user')!);
    
    // Guardar resultados en la base de datos
    const username = user.email.split('@')[0]; // Obtener el nombre de usuario
    // fecha
    const fecha = Timestamp.fromDate(new Date());
    // sumar puntos totales del usuario
    const puntosTotales = this.resultados.reduce((total, res) => total + res.puntaje, 0); // Suma los puntos de todos los resultados

    // Guardar resultados en local storage
    const resultados = { username: username, email: user.email, fecha: fecha, puntos: puntosTotales, juego: 'ahorcado' };

    // Guardar resultados en la base de datos
    const col = collection(this.firestore, 'resultados');
    addDoc(col, resultados);

    console.log('Resultados:', resultados);
  }
}
