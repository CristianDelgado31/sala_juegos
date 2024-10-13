import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  user$ = this.userSubject.asObservable();

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user'); // si existe el usuario en el local storage retorna true sino false
  }

  login() {
    this.userSubject.next(true);
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(false);
  }
}
