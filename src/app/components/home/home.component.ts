import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = '¡Bienvenido!';
  userInLocalStorage: boolean = false;

  constructor(private router: Router, private userService: UserService) {
    this.userService.user$.subscribe(isLoggedIn => {
      this.userInLocalStorage = isLoggedIn;

      if (isLoggedIn) {
        const user = JSON.parse(localStorage.getItem('user')!);
        const email = user.email.split('@')[0];
        this.title = `¡Bienvenido \n ${email}!`;
      }
    });
  }

  logOut(): void {
    this.userService.logout();
    console.log('Usuario deslogueado');
    this.router.navigate(['/login']);
  }

  navigateToGame(gameRoute: string): void {
    if (this.userInLocalStorage) {
      this.router.navigate([gameRoute]);
    } else {
      this.router.navigate(['/login']); // Redirigir a login si no hay usuario logueado
    }
  }
}
