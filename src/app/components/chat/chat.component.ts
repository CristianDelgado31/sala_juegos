import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';import { Firestore, addDoc, collection, collectionData, Timestamp, query, doc, setDoc, orderBy} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { IMessage, Message } from '../../models/message';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, NgIf, DatePipe], 
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  newMessage: string = '';
  currentUser: string = 'Usuario'; // Cambia esto según el usuario actual
  userInLocalStorage: boolean = false;
  isChatVisible: boolean = false;

  private sub!: Subscription;
  public MessagesCollection: IMessage[] = [];
  public countMessages: number = 0;
  
  constructor(private userService: UserService, private firestore: Firestore, public auth: Auth, ) {
    this.userService.user$.subscribe(isLoggedIn => {
      this.userInLocalStorage = isLoggedIn;

      if(this.userInLocalStorage) {
      const user = JSON.parse(localStorage.getItem('user')!);
      const email = user.email.split('@')[0];
      this.currentUser = email;
      }
    });
  }

  toggleChat(): void {
    this.isChatVisible = !this.isChatVisible; // Alterna la visibilidad

    if(this.isChatVisible) {
      this.getMessages(); // Obtener los mensajes del chat
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim()) { // Si el mensaje no está vacío
      // this.messages.push({ sender: this.currentUser, text: this.newMessage });
      this.logChat(this.newMessage); // Guardar el chat en Firestore

      this.newMessage = ''; // Limpiar el campo de entrada
    }
  }

  logChat(data: String): void {
    let col = collection(this.firestore, 'chat');
    let obj = { fecha: Timestamp.fromDate(new Date()), usuario: this.currentUser, mensaje: data };
    addDoc(col, obj);
  }

  getMessages(): void {
    let col = collection(this.firestore, 'chat');
    const filteredQuery = query(
      col,
      orderBy('fecha', 'asc')
    );

    const observable = collectionData(filteredQuery);
  this.sub = observable.subscribe((respuesta: any) => {
    this.MessagesCollection = respuesta.map((data: any) => {
      // Convertir el timestamp a Date
      const fecha = data.fecha; // Asegúrate de que 'fecha' es un Timestamp
      return new Message(fecha, data.mensaje, data.usuario);
    });
    
    this.countMessages = this.MessagesCollection.length;
    // console.log(this.MessagesCollection);
  });
  }

  // Limpiar la suscripción
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
