import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Firestore, addDoc, collection, collectionData, Timestamp, query, doc, setDoc, orderBy} from '@angular/fire/firestore';
import { Auth, user } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { IMessage, Message } from '../../models/message';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, NgIf, DatePipe], 
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, OnDestroy {

  newMessage: string = '';
  currentUser: string = 'Usuario';
  currentEmail: string = '';
  userInLocalStorage: boolean = false;
  isChatVisible: boolean = false;

  private userSubscription!: Subscription; // Suscripción al estado del usuario
  private messageSubscription!: Subscription; // Suscripción a los mensajes
  public MessagesCollection: IMessage[] = [];
  public countMessages: number = 0;

  @ViewChild('chatMessages') chatMessages!: ElementRef;
  
  constructor(private userService: UserService, private firestore: Firestore, public auth: Auth, private router: Router) {}

  ngOnInit() {
    // Suscribirse al estado del usuario
    this.userSubscription = this.userService.user$.subscribe(isLoggedIn => {
      this.userInLocalStorage = isLoggedIn;

      if (this.userInLocalStorage) {
        const userObj = JSON.parse(localStorage.getItem('user')!);
        const email = userObj.email;
        this.currentUser = email.split('@')[0];
        this.currentEmail = email;
      }
    });
  }

  ngOnDestroy() {
    // Limpiar suscripciones
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  toggleChat(): void {
    this.isChatVisible = !this.isChatVisible;

    if (this.isChatVisible) {
      this.getMessages(); // Obtener los mensajes del chat
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.logChat(this.newMessage);
      this.newMessage = ''; // Limpiar el campo de entrada
    }
  }

  logChat(data: String): void {
    let col = collection(this.firestore, 'chat');
    let obj = { fecha: Timestamp.fromDate(new Date()), usuario: this.currentUser, email: this.currentEmail, mensaje: data };
    addDoc(col, obj);
  }

  getMessages(): void {
    let col = collection(this.firestore, 'chat');
    const filteredQuery = query(col, orderBy('fecha', 'asc'));
    const observable = collectionData(filteredQuery);
    
    this.messageSubscription = observable.subscribe((respuesta: any) => {
      this.MessagesCollection = respuesta.map((data: any) => {
        const fecha = data.fecha; 
        return new Message(fecha, data.mensaje, data.usuario, data.email);
      });
      
      this.countMessages = this.MessagesCollection.length;
      this.scrollToBottom();
    });
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    }, 0);
  }

}
