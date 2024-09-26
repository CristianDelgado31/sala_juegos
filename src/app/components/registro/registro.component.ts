import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{

  user!: User;

  email!: string;
  password!: string;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(public auth: Auth, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(registroForm: any) {
    this.user = new User(this.email, this.password);
    this.errorMessage = ''; // Reiniciar mensaje de error
    this.loading = true; // Activar el spinner

    createUserWithEmailAndPassword(this.auth, this.user.getEmail(), this.user.getPassword()).then((userCredential) => {
      this.loading = false; // Desactivar el spinner
      if (userCredential.user) {
        console.log('Usuario creado con éxito');
        localStorage.setItem('user', JSON.stringify({email: userCredential.user.email}));
        this.router.navigate(['/home']);
      }

    }).catch((error) => {
      this.loading = false; // Desactivar el spinner

      // // Limpiar el formulario
      // this.email = '';
      // this.password = '';
      // registroForm.reset(); // Reiniciar el formulario
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          this.errorMessage = 'El email ya está en uso'; // Asigna el mensaje
          break;
        case 'auth/invalid-email':
          this.errorMessage = 'El email no es válido';
          break;
        case 'auth/weak-password':
          this.errorMessage = 'La contraseña tiene que tener al menos 6 caracteres';
          this.password = '';
          break;
        default:
          this.errorMessage = 'Error desconocido';
          break;
      }
    });
  }
} 
