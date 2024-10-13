import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', title: 'Login', component: LoginComponent},
    { path: 'quien-soy', title: 'Quien soy', component: QuienSoyComponent },
    { path: 'registro', title: 'Registro', component: RegistroComponent },
    { 
        path: 'encuesta', title: 'Encuesta', component: EncuestaComponent,
        canActivate: [authGuard]
    },
    {
        path: 'juegos',
        loadChildren: () => import('./modules/juegos/juegos.module').then(m => m.JuegosModule),
        canActivate: [authGuard]
    },

    // // otherwise redirect to home
    { path: '**', redirectTo: 'home' }

];
