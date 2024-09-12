import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // usuario: Usuario = new Usuario("", "");
  usuario = {
    nombre: '',
    clave: ''
  }

  constructor() {}

  onLogin(): void {
    // Aquí puedes manejar el login, por ejemplo, validando el usuario
    console.log('Login realizado con:', this.usuario);
    // Aquí podrías enviar la información al backend, etc.
  }
}
