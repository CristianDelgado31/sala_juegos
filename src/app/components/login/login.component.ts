import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { Firestore, addDoc, collection, collectionData, where, orderBy, limit, query, doc, setDoc} from '@angular/fire/firestore';
import { signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NgIf,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!: User;
  email = '';
  password = '';
  isLoading = false;

  constructor(
    private router: Router,
    private firestore: Firestore,
    public auth: Auth,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  onLogin(): void {
    this.user = new User(this.email, this.password);
    this.isLoading = true;

    signInWithEmailAndPassword(this.auth, this.user.getEmail(), this.user.getPassword())
      .then((response) => {
        localStorage.setItem('user', JSON.stringify({ email: this.auth.currentUser?.email }));
        this.userService.login();
        this.router.navigate(['/home']);
        this.logUsuarios();
      })
      .catch(() => {
        this.snackBar.open('Email y/o contraseña incorrecto.', 'Cerrar', {
          duration: 3000,
        });
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  logUsuarios(): void {
    const col = collection(this.firestore, 'logins');
    const obj = { fecha: new Date(), email: this.user.getEmail() };
    addDoc(col, obj);
  }

  quickLogin(email: string, password: string): void {
    this.email = email;
    this.password = password;
  }
}
