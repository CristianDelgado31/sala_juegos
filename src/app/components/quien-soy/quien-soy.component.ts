import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent {
  nombre = 'Cristian Delgado';
  edad = 23;
  estudios = 'Tecnicatura en Programación en la UTN';
  imagen = 'images/foto_estudiante.jpg'; // Cambia esto por la ruta de tu imagen
}
