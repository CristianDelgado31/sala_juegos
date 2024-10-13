import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreguntadosMainComponent } from './componentes/preguntados-main/preguntados-main.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';
import { RuletaComponent } from './componentes/ruleta/ruleta.component';
import { BanderasService } from '../../services/preguntados/banderas.service';
import { MayormenorComponent } from './componentes/mayormenor/mayormenor.component';
import { LaberintoComponent } from './componentes/laberinto/laberinto.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PreguntadosMainComponent,
    PreguntasComponent,
    RuletaComponent,
    MayormenorComponent,
    LaberintoComponent,
    AhorcadoComponent,
    ResultadosComponent
  ],
  exports: [
    PreguntadosMainComponent,
    PreguntasComponent,
    RuletaComponent,
    MayormenorComponent,
    LaberintoComponent,
    AhorcadoComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule,
    HttpClientModule,
    NgIf,
    MatButtonModule
  ],
  providers: [BanderasService]
})
export class JuegosModule { }
