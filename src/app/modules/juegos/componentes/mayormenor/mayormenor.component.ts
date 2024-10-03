import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css'],
})
export class MayormenorComponent implements OnInit {
  cartaActual: string = '';
  cartaSiguiente: string = '';
  puntos: number = 0;
  mensaje: string = '';
  cartasUsadas: Set<string> = new Set(); // Almacena las cartas que ya han sido usadas
  cartasDisponibles: string[] = this.generarBaraja(); // Genera la baraja al inicio
  ultimaCarta: string = '';

  ngOnInit(): void {
    this.sacarCarta();
  }

  generarBaraja(): string[] {
    const numeros = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const palos = ['C', 'D', 'H', 'S'];
    const baraja: string[] = [];

    for (const numero of numeros) {
      for (const palo of palos) {
        baraja.push(`${numero}${palo}.png`); // Crea las cartas
      }
    }
    return baraja; // Devuelve la baraja completa
  }

  sacarCarta(): void {
    this.cartaActual = this.obtenerCarta();
    this.cartaSiguiente = this.obtenerCarta();
  }

  obtenerCarta(): string {
    if(this.cartasDisponibles.length === 1)
      this.ultimaCarta = this.cartasDisponibles[0];
    if (this.cartasDisponibles.length === 0) {
      this.mensaje = 'No quedan más cartas. Fin del juego.';
      this.cartaActual = this.ultimaCarta;
      return '';
    }

    let carta: string;
    do {
      const index = Math.floor(Math.random() * this.cartasDisponibles.length);
      carta = this.cartasDisponibles[index];
    } while (this.cartasUsadas.has(carta)); // Asegura que no se repita

    this.cartasUsadas.add(carta); // Marca la carta como usada
    this.cartasDisponibles = this.cartasDisponibles.filter(c => c !== carta); // Elimina la carta de disponibles
    return carta; // Devuelve la carta seleccionada
  }

  obtenerValor(valor: string): number {
    const valores: { [key: string]: number } = {
      '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
      '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14,
    };

    const valorSinPalo = valor.slice(0, valor.length - 5); // Extraer el valor
    return valores[valorSinPalo] || 0; // Devuelve 0 si no se encuentra
  }

  verificarSeleccion(opcion: string): void {
    const valorActual = this.obtenerValor(this.cartaActual);
    const valorSiguiente = this.obtenerValor(this.cartaSiguiente);

    if(!this.ultimaCarta){
      if ((opcion === 'mayor' && valorActual < valorSiguiente) || 
          (opcion === 'menor' && valorActual > valorSiguiente)) {
        this.puntos++;
        this.mensaje = '¡Correcto! Puntos: ' + this.puntos;
      } else {
        this.mensaje = 'Incorrecto. La carta era: ' + this.cartaSiguiente.slice(0, -4); // Muestra la carta correcta (sin .png)
      }
    }

    // Convertir la carta siguiente en la nueva carta actual
    this.cartaActual = this.cartaSiguiente; // Actualiza la carta actual
    this.cartaSiguiente = this.obtenerCarta(); // Obtiene la nueva carta siguiente
    // console.log(this.cartasDisponibles);
    // console.log(this.cartasUsadas);
  }

  reiniciarJuego(): void {
    this.puntos = 0;
    this.mensaje = '';
    this.cartasUsadas.clear(); // Limpiar las cartas usadas
    this.cartasDisponibles = this.generarBaraja(); // Generar una nueva baraja
    this.sacarCarta(); // Sacar la primera carta
  }
  
}
