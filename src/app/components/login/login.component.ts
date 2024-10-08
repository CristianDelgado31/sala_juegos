import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { Firestore, addDoc, collection, collectionData, where, orderBy, limit, query, doc, setDoc} from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { signInWithEmailAndPassword, Auth, signOut } from '@angular/fire/auth';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  user!: User;
  email = '';
  password = '';
  errorMessage: string = ''; // Propiedad para el mensaje de error
  isLoading = false; // Propiedad para manejar el estado de carga

  public loginsCollection: any[] = [];
  public countLogins: number = 0;
  private sub!: Subscription;

  constructor(private router: Router, private firestore: Firestore, public auth: Auth, private userService: UserService) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/home']);
    }
  }
  onLogin(): void {
    this.user = new User(this.email, this.password);
    this.isLoading = true; // Inicia el spinner al comenzar el login
  
    signInWithEmailAndPassword(this.auth, this.user.getEmail(), this.user.getPassword())
      .then((response) => {
        localStorage.setItem('user', JSON.stringify({ email: this.auth.currentUser?.email }));
        this.userService.login(); // Notificar al servicio de usuario
        this.router.navigate(['/home']);
        this.logUsuarios();
      })
      .catch((error) => {
        // console.log('Error:', error);
        this.errorMessage = 'Usuario no encontrado.'; // Establecer el mensaje de error
      })
      .finally(() => {
        this.isLoading = false; // Detiene el spinner al finalizar
      });
  }


  // Cambiar los nombres del html y css de login con email y password

  logUsuarios(): void {
    let col = collection(this.firestore, 'logins');
    let obj = { fecha: new Date(), email: this.user.getEmail() };
    addDoc(col, obj);
  }



  // Para el log de usuarios
  getData(): void {
    let col = collection(this.firestore, 'logins');
    const filteredQuery = query(
      col
    );

    const observable = collectionData(filteredQuery);
    this.sub = observable.subscribe((respuesta: any) => {
      this.loginsCollection = respuesta;
      this.countLogins = this.loginsCollection.length;
      console.log(respuesta);
    });

  }


  // Añadir este método en el componente
  quickLogin(email: string, password: string): void {
    this.email = email;
    this.password = password;

    // this.onLogin();
  }

}
