import { Component, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    RouterLink,
    MatMenuModule,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMobile: boolean = false;
  userInLocalStorage: boolean = false; // Cambiar a booleano
  isNavbarOpen: any;
  userEmail: string = '';

  constructor(private userService: UserService, private router: Router) {
    this.checkScreenSize(window.innerWidth);

    this.userService.user$.subscribe(isLoggedIn => {
      this.userInLocalStorage = isLoggedIn; // Actualizar el estado del usuario 
      
      if(isLoggedIn) {
        const user = localStorage.getItem('user'); // Obtener el usuario del local storage
        this.userEmail = user ? JSON.parse(user).email : ''; // Obtener el email del usuario
      }
      
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize(event.target.innerWidth);
  }

  checkScreenSize(width: number) {
    this.isMobile = width < 768; // Cambia 768 por el ancho deseado para móvil
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  logOut() {
    this.userService.logout(); // Usar el servicio para hacer logout
    this.router.navigate(['/login']); // Redirigir al login
  }
}
