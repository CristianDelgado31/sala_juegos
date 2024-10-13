import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  redirigirAJuego(ruta: string){
    // console.log(ruta);
    const rutaCompleta = `juegos/${ruta}`;
    this.router.navigate([rutaCompleta]);
  }
}
