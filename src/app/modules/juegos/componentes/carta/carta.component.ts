import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  @Input() carta: any; // Asegúrate de que el tipo sea adecuado
}
