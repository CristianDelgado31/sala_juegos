import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', title: 'Home', component: HomeComponent },
    { path: 'login', title: 'Login', component: LoginComponent },
    { path: 'quien-soy', title: 'Quien soy', component: QuienSoyComponent },
    { path: 'registro', title: 'Registro', component: RegistroComponent },
    { path: 'encuesta', title: 'Encuesta', component: EncuestaComponent },
    {
        path: 'juegos',
        loadChildren: () => import('./modules/juegos/juegos.module').then(m => m.JuegosModule)
    },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];
