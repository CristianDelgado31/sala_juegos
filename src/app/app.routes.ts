import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', title: 'Home', component: HomeComponent },
    { path: 'login', title: 'Login', component: LoginComponent },
    { path: 'quien-soy', title: 'Quien soy', component: QuienSoyComponent },
    { path: 'registro', title: 'Registro', component: RegistroComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];
