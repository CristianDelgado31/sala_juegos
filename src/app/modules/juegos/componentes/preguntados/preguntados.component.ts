import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TemaService } from '../../../../services/preguntados/tema.service';
import { BanderasService } from '../../../../services/preguntados/banderas.service';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection, collectionData, where, orderBy, limit, query, doc, setDoc, Timestamp} from '@angular/fire/firestore';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit, OnDestroy {
  @Input() tema!: string; // Recibe el continente seleccionado como entrada
  preguntaActual: { pregunta: string, opciones: string[], respuestaCorrecta: string, imagen?: string } | null = null;
  mensaje: string | null = null; // Para mostrar mensajes de respuesta
  banderaUrl: string | null = null; // URL de la bandera
  puedeSeleccionar: boolean = true; // Controla si se pueden seleccionar opciones
  preguntasRespondidas: string[] = []; // Para almacenar preguntas ya respondidas
  puntaje: number = 0; // Puntaje del usuario

  constructor(private temaService: TemaService, private banderasService: BanderasService, 
    private router: Router, private firebase : Firestore) {}

  ngOnInit() {
    this.cargarPregunta();
  }

  cargarPregunta() {
    const preguntasPorContinente: { [key: string]: { pregunta: string, opciones: string[], respuestaCorrecta: string, imagen?: string }[] } = {
      'Americas': [
        { pregunta: '¿Cuál es la capital de EE.UU.?', opciones: ['Washington D.C.', 'Nueva York', 'Los Ángeles'], respuestaCorrecta: 'Washington D.C.', imagen: '' },
        { pregunta: '¿Qué bandera es esta?', opciones: ['Argentina', 'Brasil', 'Chile'], respuestaCorrecta: 'Argentina', imagen: '' }
      ],
      'Europe': [
        { pregunta: '¿Cuál es la capital de Alemania?', opciones: ['Berlín', 'Múnich', 'Frankfurt'], respuestaCorrecta: 'Berlín', imagen: '' },
        { pregunta: '¿Qué bandera es esta?', opciones: ['Francia', 'Italia', 'España'], respuestaCorrecta: 'Francia', imagen: '' }
      ],
      'Asia': [
        { pregunta: '¿Cuál es la capital de Japón?', opciones: ['Tokio', 'Seúl', 'Beijing'], respuestaCorrecta: 'Tokio', imagen: '' },
        { pregunta: '¿Qué bandera es esta?', opciones: ['China', 'India', 'Tailandia'], respuestaCorrecta: 'China', imagen: '' }
      ],
      'Oceania': [
        { pregunta: '¿Cuál es la capital de Australia?', opciones: ['Canberra', 'Sídney', 'Melbourne'], respuestaCorrecta: 'Canberra', imagen: '' },
        { pregunta: '¿Qué bandera es esta?', opciones: ['Nueva Zelanda', 'Fiyi', 'Samoa'], respuestaCorrecta: 'Nueva Zelanda', imagen: '' }
      ],
      'Africa': [
        { pregunta: '¿Cuál es la capital de Sudáfrica?', opciones: ['Pretoria', 'Johannesburgo', 'Ciudad del Cabo'], respuestaCorrecta: 'Pretoria', imagen: '' },
        { pregunta: '¿Qué bandera es esta?', opciones: ['Nigeria', 'Egipto', 'Sudáfrica'], respuestaCorrecta: 'Nigeria', imagen: '' }
      ]
    };

    const preguntasContinente = preguntasPorContinente[this.tema] || [];
    const preguntasRestantes = preguntasContinente.filter(p => !this.preguntasRespondidas.includes(p.pregunta));

    if (preguntasRestantes.length > 0) {
      this.preguntaActual = preguntasRestantes[Math.floor(Math.random() * preguntasRestantes.length)];
      this.preguntasRespondidas.push(this.preguntaActual.pregunta); // Guarda la pregunta respondida
      this.cargarBanderaPorPregunta(this.preguntaActual);
    } else {
      setTimeout(() => {
        this.guardarPuntaje(); // Guarda el puntaje al terminar
        this.temaService.limpiarTema(); // Limpia el tema al salir del componente
        this.preguntaActual = null; // Limpia la pregunta actual
      }, 50);
    }
  }

  cargarBanderaPorPregunta(pregunta: { pregunta: string, opciones: string[], respuestaCorrecta: string }) {
    // Reinicia banderaUrl al principio
    this.banderaUrl = null;

    // Decide qué bandera cargar según la respuesta correcta
    switch (pregunta.respuestaCorrecta) {
      case 'Washington D.C.':
        this.cargarBandera('United States');
        break;
      case 'Argentina':
        this.cargarBandera('Argentina');
        break;
      case 'Berlín':
        this.cargarBandera('Germany');
        break;
      case 'Francia':
        this.cargarBandera('France');
        break;
      case 'Tokio':
        this.cargarBandera('Japan');
        break;
      case 'China':
        this.cargarBandera('China');
        break;
      case 'Canberra':
        this.cargarBandera('Australia');
        break;
      case 'Nueva Zelanda':
        this.cargarBandera('New Zealand');
        break;
      case 'Pretoria':
        this.cargarBandera('South Africa');
        break;
      case 'Nigeria':
        this.cargarBandera('Nigeria');
        break;
      default:
        this.banderaUrl = null; // Sin bandera para otras preguntas
        break;
    }
}


  cargarBandera(dato: string) {
    this.banderasService.obtenerBandera(dato).subscribe(
      (data) => {
        this.banderaUrl = data[0].flags.svg; // Obtén la URL de la bandera
      },
      (error) => {
        console.error('Error al obtener la bandera:', error);
        this.banderaUrl = null; // Si hay un error, no mostramos ninguna bandera
      }
    );
  }

  verificarRespuesta(opcion: string) {
    if (this.preguntaActual && this.puedeSeleccionar) {
      this.puedeSeleccionar = false; // Desactivar selección
      if (opcion === this.preguntaActual.respuestaCorrecta) {
        this.mensaje = '¡Respuesta Correcta!';
        this.puntaje += 50; // Sumar puntos por respuesta correcta
        setTimeout(() => {
          this.mensaje = null;
          this.cargarPregunta(); // Cargar nueva pregunta después de unos segundos
          this.puedeSeleccionar = true; // Activar selección para la siguiente pregunta
        }, 2000);
      } else {
        this.mensaje = 'Respuesta Incorrecta.';
        setTimeout(() => {
          this.mensaje = null;
          this.puedeSeleccionar = true; // Activar selección para la siguiente pregunta
          this.cargarPregunta();
        }, 2000);
      }
    }
  }

  ngOnDestroy() {
    this.temaService.limpiarTema(); // Limpia el tema al salir del componente
  }

  guardarPuntaje() : void {
    const user = JSON.parse(localStorage.getItem('user')!);
    const username = user.email.split('@')[0]; // Obtener el nombre de usuario
    const fecha = Timestamp.fromDate(new Date());

    // Guardar puntaje en la base de datos
    const resultado = { email: user.email, fecha: fecha, juego: 'preguntados', puntos: this.puntaje, username: username };
    const col = collection(this.firebase, 'resultados');
    addDoc(col, resultado);

  }  

}
