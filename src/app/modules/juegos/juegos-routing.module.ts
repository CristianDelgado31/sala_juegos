import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayormenorComponent } from './componentes/mayormenor/mayormenor.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { PreguntadosMainComponent } from './componentes/preguntados-main/preguntados-main.component';
import { RuletaComponent } from './componentes/ruleta/ruleta.component';
import { LaberintoComponent } from './componentes/laberinto/laberinto.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';

const routes: Routes = [
  {
    path: 'ahorcado',
    component: AhorcadoComponent
  },
  {
    path: 'mayor-menor',
    component: MayormenorComponent
  },
  {
    path: 'preguntados',
    component: PreguntadosMainComponent
  },
  {
    path: 'snake',
    component: LaberintoComponent
  },
  {
    path: 'resultados',
    component: ResultadosComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
