import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayormenorComponent } from './componentes/mayormenor/mayormenor.component';

const routes: Routes = [
  {
    path: 'ahorcado',
    component: AhorcadoComponent
  },
  {
    path: 'mayor-menor',
    component: MayormenorComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
