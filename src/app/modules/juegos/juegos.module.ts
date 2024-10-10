import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayormenorComponent } from './componentes/mayormenor/mayormenor.component';
import { FormsModule } from '@angular/forms';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { PreguntadosMainComponent } from './componentes/preguntados-main/preguntados-main.component';
import { RuletaComponent } from './componentes/ruleta/ruleta.component';
import { HttpClientModule } from '@angular/common/http';
import { BanderasService } from '../../services/preguntados/banderas.service';
import { LaberintoComponent } from './componentes/laberinto/laberinto.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';


@NgModule({
  declarations: [AhorcadoComponent, MayormenorComponent, PreguntadosComponent, 
    PreguntadosMainComponent, RuletaComponent, LaberintoComponent, ResultadosComponent
  ],
  exports: [
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    PreguntadosMainComponent,
    RuletaComponent,
    LaberintoComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BanderasService] // Registra el servicio aquí
  
})
export class JuegosModule { }
