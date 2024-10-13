import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userInLocalStorage: boolean = false; // Cambiar a booleano
  isNavbarOpen: any;

  constructor(private userService: UserService, private router: Router) {
    this.userService.user$.subscribe(isLoggedIn => {
      this.userInLocalStorage = isLoggedIn; // Actualizar el estado del usuario

      // if (isLoggedIn) {
    });
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen; // Cambiar el estado de la barra de navegación
  }

  logOut() {
    this.userService.logout(); // Usar el servicio para hacer logout
    this.router.navigate(['/login']); // Redirigir al login
  }
}
