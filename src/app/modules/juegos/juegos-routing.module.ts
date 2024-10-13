import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntadosMainComponent } from './componentes/preguntados-main/preguntados-main.component';
import { MayormenorComponent } from './componentes/mayormenor/mayormenor.component';
import { LaberintoComponent } from './componentes/laberinto/laberinto.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { authGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: 'preguntados',
    component: PreguntadosMainComponent,
    canActivate: [authGuard]
  },
  {
    path: 'mayor-menor',
    component: MayormenorComponent,
    canActivate: [authGuard]
  },
  {
    path: 'viborita',
    component: LaberintoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'ahorcado',
    component: AhorcadoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'resultados',
    component: ResultadosComponent,
    canActivate: [authGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
