import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayormenorComponent } from './componentes/mayormenor/mayormenor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AhorcadoComponent, MayormenorComponent],
  exports: [
    AhorcadoComponent,
    MayormenorComponent,
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule,
    // HttpClientModule
  ],
  // providers: [CardService] // Registra el servicio aquí
  
})
export class JuegosModule { }
