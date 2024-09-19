import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class HomeComponent implements OnInit {
  title!: string; // Inicialización directa
  email!: string;

  userInLocalStorage: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userInLocalStorage = localStorage.getItem('user');

    if (!this.userInLocalStorage) {
      console.log('No hay un usuario logueado');
      this.title = '¡Bienvenido!';
    } else {
      console.log('Usuario logueado');
      try {
        const user = JSON.parse(this.userInLocalStorage);
        this.email = user.email.split('@')[0]; // Solo toma la parte antes del '@'
        this.title = `¡Bienvenido \n${this.email}!`;
      } catch (error) {
        console.error('Error al parsear el usuario de localStorage:', error);
      }
    }
}


  logOut(): void {
    localStorage.removeItem('user');
    console.log('Usuario deslogueado');
    this.router.navigate(['/login']);
  }
}
