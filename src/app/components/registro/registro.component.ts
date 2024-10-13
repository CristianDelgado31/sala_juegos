import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importar MatSnackBar

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    RouterModule,
    NgIf
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  user!: User;
  email!: string;
  password!: string;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(public auth: Auth, private router: Router, private snackBar: MatSnackBar) {} // Inyectar MatSnackBar

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(registroForm: any) {
    this.user = new User(this.email, this.password);
    this.errorMessage = '';
    this.loading = true;

    createUserWithEmailAndPassword(this.auth, this.user.getEmail(), this.user.getPassword())
      .then((userCredential) => {
        this.loading = false;
        if (userCredential.user) {
          console.log('Usuario creado con éxito');
          localStorage.setItem('user', JSON.stringify({ email: userCredential.user.email }));
          this.openSnackBar('Registro exitoso!', 'Cerrar'); // Mostrar mensaje de éxito
          this.router.navigate(['/home']);
        }
      })
      .catch((error) => {
        this.loading = false;
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.errorMessage = 'El email ya está en uso';
            break;
          case 'auth/invalid-email':
            this.errorMessage = 'El email no es válido';
            break;
          case 'auth/weak-password':
            this.errorMessage = 'La contraseña tiene que tener al menos 6 caracteres';
            this.password = '';
            break;
          default:
            if (!this.email) {
              this.errorMessage = 'El email es requerido';
            } else if (!this.password) {
              this.errorMessage = 'La contraseña es requerida';
            } else {
              this.errorMessage = 'Error desconocido';
            }
            break;
        }
        this.openSnackBar(this.errorMessage, 'Cerrar'); // Mostrar mensaje de error
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, // Duración en milisegundos
    });
  }
}
