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

  ngOnInit(): void {
    this.sacarCarta();
  }

  sacarCarta(): void {
    this.cartaActual = this.obtenerCarta();
    this.cartaSiguiente = this.obtenerCarta();
  }

  obtenerCarta(): string {
    const numeros = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const palos = ['C', 'D', 'H', 'S'];
    const numero = numeros[Math.floor(Math.random() * numeros.length)];
    const palo = palos[Math.floor(Math.random() * palos.length)];
    return `${numero}${palo}.png`;
  }

  obtenerValor(valor: string): number {
    const valores: { [key: string]: number } = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
        '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14,
    };

    // Extraer solo el valor de la carta (sin el palo y la extensión)
    const valorSinPalo = valor.slice(0, valor.length - 5); // Suponiendo que es 'X.png'

    // Log para verificar el valor extraído
    console.log('Valor extraído:', valorSinPalo);

    return valores[valorSinPalo] || 0; // Devuelve 0 si no se encuentra
}


  verificarSeleccion(opcion: string): void {
    const valorActual = this.obtenerValor(this.cartaActual);
    const valorSiguiente = this.obtenerValor(this.cartaSiguiente);

    console.log('Valor Actual:', valorActual, 'Valor Siguiente:', valorSiguiente, 'Opción Elegida:', opcion); // Agregado para depuración

    if ((opcion === 'mayor' && valorActual < valorSiguiente) || 
        (opcion === 'menor' && valorActual > valorSiguiente)) {
      this.puntos++;
      this.mensaje = '¡Correcto! Puntos: ' + this.puntos;
    } else {
      this.puntos = 0; // Reiniciar los puntos
      this.mensaje = 'Incorrecto. La carta era: ' + this.cartaSiguiente[0];
    }

    this.sacarCarta(); // Sacar nuevas cartas para continuar el juego

    // Esperar un momento antes de sacar una nueva carta
    // setTimeout(() => {
    //   this.sacarCarta(); // Sacar nuevas cartas para continuar el juego
    // }, 2000); // Esperar 2 segundos
  }
}
