import{A as y,B as K,Ba as pe,C as r,Ca as de,D as C,Da as me,E as m,F as c,Fa as ge,G as W,H as Y,I as a,J as i,K as d,L as J,M as U,N as b,O as g,P as p,Q as Z,R as X,S as ee,U as s,V as k,W as _,X as te,Y as ne,Z as oe,ba as M,f as G,ha as T,ia as O,ja as P,ka as ie,ma as ae,n as j,na as re,o as A,oa as se,q,ra as F,s as h,t as E,ua as H,v as u,w as f,wa as ce,za as le}from"./chunk-WNT6ZDTM.js";var xe=(n,t)=>({"mensaje-victoria":n,"mensaje-perdido":t}),he=(n,t)=>({"letra-correcta":n,"letra-incorrecta":t});function be(n,t){if(n&1){let e=b();a(0,"div")(1,"h2"),s(2,"Selecciona un T\xF3pico:"),i(),a(3,"select",2),oe("ngModelChange",function(l){u(e);let x=p();return ne(x.topicoSeleccionado,l)||(x.topicoSeleccionado=l),f(l)}),g("change",function(){u(e);let l=p();return f(l.seleccionarPalabra())}),a(4,"option",3),s(5,"Elige un T\xF3pico"),i(),a(6,"option",4),s(7,"Animales"),i(),a(8,"option",5),s(9,"Frutas"),i(),a(10,"option",6),s(11,"Pa\xEDses"),i(),a(12,"option",7),s(13,"Deportes"),i()(),a(14,"button",8),g("click",function(){u(e);let l=p();return f(l.iniciarJuego())}),s(15,"Iniciar Juego"),i()()}if(n&2){let e=p();r(3),te("ngModel",e.topicoSeleccionado),r(11),c("disabled",!e.topicoSeleccionado)}}function _e(n,t){if(n&1&&(J(0),s(1),U()),n&2){let e=p().$implicit;r(),k(e)}}function Ce(n,t){n&1&&(J(0),s(1,"_"),U())}function ve(n,t){if(n&1&&(a(0,"span",17),m(1,_e,2,1,"ng-container",1)(2,Ce,2,0,"ng-container",1),i()),n&2){let e=t.$implicit,o=p(2);r(),c("ngIf",o.letraAdivinada(e)),r(),c("ngIf",!o.letraAdivinada(e))}}function ye(n,t){if(n&1&&(a(0,"div",18),s(1),i()),n&2){let e=p(2);c("ngClass",M(2,xe,e.gano,e.perdio)),r(),_(" ",e.mensaje," ")}}function Me(n,t){if(n&1){let e=b();a(0,"div",19)(1,"button",20),g("click",function(){u(e);let l=p(2);return f(l.reiniciarJuego())}),s(2),i()()}if(n&2){let e=p(2);r(2),_(" ",e.perdio?"Reintentar":"Volver a Jugar"," ")}}function Pe(n,t){if(n&1){let e=b();a(0,"button",21),g("click",function(){let l=u(e).$implicit,x=p(2);return f(x.adivinarLetra(l))}),s(1),i()}if(n&2){let e=t.$implicit,o=p(2);c("ngClass",M(3,he,o.letraAdivinada(e)&&o.palabraActual.includes(e),o.letraAdivinada(e)&&!o.palabraActual.includes(e)))("disabled",o.letraAdivinada(e)),r(),_(" ",e," ")}}function Se(n,t){if(n&1&&(a(0,"div")(1,"div",9),d(2,"img",10),i(),a(3,"div",11)(4,"h2"),m(5,ve,3,2,"span",12),i()(),m(6,ye,2,5,"div",13)(7,Me,3,1,"div",14),a(8,"div",15),m(9,Pe,2,6,"button",16),i()()),n&2){let e=p();r(2),c("src",e.getImagen(),y),r(3),c("ngForOf",e.palabraActual.split("")),r(),c("ngIf",e.mensaje),r(),c("ngIf",e.perdio||e.gano),r(2),c("ngForOf",e.alfabeto)}}var z=class n{palabras={animales:["perro","gato","elefante","leon","delfin","tigre","conejo","caballo","jirafa","ballena"],frutas:["manzana","banana","naranja","frutilla","uva","kiwi","mango","pi\xF1a","cereza","sandia"],paises:["espana","mexico","japon","brasil","canada","francia","italia","alemania","argentina","chile"],deportes:["futbol","baloncesto","tenis","natacion","ciclismo","voleibol","golf","boxeo","rugby","escalada"]};palabraActual="";letrasAdivinadas=[];intentos=0;maxIntentos=6;alfabeto="abcdefghijklmnopqrstuvwxyz".split("");mensaje="";perdio=!1;gano=!1;topicoSeleccionado="";juegoIniciado=!1;iniciarJuego(){this.juegoIniciado=!0,this.seleccionarPalabra()}seleccionarPalabra(){if(this.topicoSeleccionado){let t=Math.floor(Math.random()*this.palabras[this.topicoSeleccionado].length);this.palabraActual=this.palabras[this.topicoSeleccionado][t],this.letrasAdivinadas=[],this.intentos=0,this.mensaje="",this.perdio=!1,this.gano=!1}}letraAdivinada(t){return this.letrasAdivinadas.includes(t)}adivinarLetra(t){!this.letrasAdivinadas.includes(t)&&!this.perdio&&!this.gano&&(this.letrasAdivinadas.push(t),this.palabraActual.includes(t)||this.intentos++,this.verificarEstadoJuego())}verificarEstadoJuego(){this.intentos>=this.maxIntentos?(this.perdio=!0,this.mensaje="\xA1Perdiste! La palabra era: "+this.palabraActual):this.palabraActual.split("").every(t=>this.letraAdivinada(t))&&(this.gano=!0,this.mensaje="\xA1Ganaste! La palabra era: "+this.palabraActual)}getImagen(){return`images/ahorcado/hangman${this.intentos}.png`}reiniciarJuego(){this.juegoIniciado=!1,this.topicoSeleccionado="",this.letrasAdivinadas=[],this.intentos=0,this.mensaje="",this.perdio=!1,this.gano=!1}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-ahorcado"]],decls:5,vars:2,consts:[[1,"ahorcado-container"],[4,"ngIf"],[3,"ngModelChange","change","ngModel"],["value",""],["value","animales"],["value","frutas"],["value","paises"],["value","deportes"],[3,"click","disabled"],[1,"ahorcado-dibujo"],["alt","Ahorcado",1,"mu\xF1eco",3,"src"],[1,"palabra"],["class","letra",4,"ngFor","ngForOf"],["class","mensaje","style","text-align: center;",3,"ngClass",4,"ngIf"],["class","boton-reintentar-container",4,"ngIf"],[1,"botones-letras"],["class","letra-boton",3,"ngClass","disabled","click",4,"ngFor","ngForOf"],[1,"letra"],[1,"mensaje",2,"text-align","center",3,"ngClass"],[1,"boton-reintentar-container"],[1,"boton-reintentar",3,"click"],[1,"letra-boton",3,"click","ngClass","disabled"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"h1"),s(2,"Juego del Ahorcado"),i(),m(3,be,16,2,"div",1)(4,Se,10,5,"div",1),i()),e&2&&(r(3),c("ngIf",!o.juegoIniciado),r(),c("ngIf",o.juegoIniciado))},dependencies:[T,O,P,de,me,pe,ce,le],styles:[".ahorcado-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:calc(100vh - 100px);font-family:Arial,sans-serif;background:linear-gradient(to right,#ff7e5f,#feb47b);padding:20px;box-shadow:0 4px 8px #0000001a;max-width:100%;margin:auto}h1[_ngcontent-%COMP%]{color:#343a40;margin-bottom:20px;font-size:2.5rem;text-shadow:1px 1px 2px rgba(0,0,0,.2)}h2[_ngcontent-%COMP%]{color:#495057;margin:15px 0;font-size:2rem;text-align:center;font-weight:700;text-shadow:1px 1px 2px rgba(0,0,0,.2);letter-spacing:1px}select[_ngcontent-%COMP%]{padding:10px;font-size:1rem;margin-bottom:20px;border:1px solid #ced4da;border-radius:4px;outline:none;width:100%}button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-size:1rem;transition:background-color .3s;margin:5px;width:100%}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.botones-letras[_ngcontent-%COMP%]{margin:20px 0;display:flex;flex-wrap:wrap;justify-content:center}.letra-boton[_ngcontent-%COMP%]{background-color:#1e231f;color:#fff;border:none;padding:10px;border-radius:5px;margin:5px;cursor:pointer;transition:background-color .3s;width:20%;height:50px;font-size:1.5rem}.letra-boton[_ngcontent-%COMP%]:hover{background-color:#3360d3}.ahorcado-dibujo[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;justify-content:center}.mu\\f1 eco[_ngcontent-%COMP%]{width:100%;max-width:200px;height:auto}.mensaje[_ngcontent-%COMP%]{margin-top:20px;font-size:1.8rem;color:#fff;background-color:#000000b3;padding:15px;border-radius:10px;text-align:center;transition:background-color .3s}.mensaje-victoria[_ngcontent-%COMP%]{color:#1ca53c}.mensaje-perdido[_ngcontent-%COMP%]{color:#dc3545}.boton-reintentar[_ngcontent-%COMP%]{background-color:#ffc107;color:#000;padding:12px 20px;border-radius:10px;font-size:1.5rem;margin-top:15px;border:none;box-shadow:0 4px 8px #0003;transition:background-color .3s,transform .3s}.boton-reintentar[_ngcontent-%COMP%]:hover{background-color:#e0a800;transform:scale(1.05)}.palabra[_ngcontent-%COMP%]{margin:20px 0;display:flex;justify-content:center;font-size:2rem}.letra[_ngcontent-%COMP%]{margin:0 10px;display:inline-block;width:30px;text-align:center;color:#fafafa;transition:color .3s}.letra[_ngcontent-%COMP%]:empty{color:transparent}.letra-correcta[_ngcontent-%COMP%]{background-color:#28a745;cursor:not-allowed}.letra-incorrecta[_ngcontent-%COMP%]{background-color:#dc3545;cursor:not-allowed}@media (max-width: 600px){h1[_ngcontent-%COMP%]{font-size:1.5rem}h2[_ngcontent-%COMP%]{font-size:1.25rem}.letra-boton[_ngcontent-%COMP%]{width:25%}.letra[_ngcontent-%COMP%]{font-size:1.5rem}}"]})};function ke(n,t){if(n&1){let e=b();a(0,"button",10),g("click",function(){u(e);let l=p();return f(l.reiniciarJuego())}),s(1,"Reiniciar Juego"),i()}}var R=class n{cartaActual="";cartaSiguiente="";puntos=0;mensaje="";cartasUsadas=new Set;cartasDisponibles=this.generarBaraja();ultimaCarta="";ngOnInit(){this.sacarCarta()}generarBaraja(){let t=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],e=["C","D","H","S"],o=[];for(let l of t)for(let x of e)o.push(`${l}${x}.png`);return o}sacarCarta(){this.cartaActual=this.obtenerCarta(),this.cartaSiguiente=this.obtenerCarta()}obtenerCarta(){if(this.cartasDisponibles.length===1&&(this.ultimaCarta=this.cartasDisponibles[0]),this.cartasDisponibles.length===0)return this.mensaje="No quedan m\xE1s cartas. Fin del juego.",this.cartaActual=this.ultimaCarta,"";let t;do{let e=Math.floor(Math.random()*this.cartasDisponibles.length);t=this.cartasDisponibles[e]}while(this.cartasUsadas.has(t));return this.cartasUsadas.add(t),this.cartasDisponibles=this.cartasDisponibles.filter(e=>e!==t),t}obtenerValor(t){let e={2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13,A:14},o=t.slice(0,t.length-5);return e[o]||0}verificarSeleccion(t){let e=this.obtenerValor(this.cartaActual),o=this.obtenerValor(this.cartaSiguiente);this.ultimaCarta||(t==="mayor"&&e<o||t==="menor"&&e>o?(this.puntos++,this.mensaje="\xA1Correcto! Puntos: "+this.puntos):this.mensaje="Incorrecto. La carta era: "+this.cartaSiguiente.slice(0,-4)),this.cartaActual=this.cartaSiguiente,this.cartaSiguiente=this.obtenerCarta()}reiniciarJuego(){this.puntos=0,this.mensaje="",this.cartasUsadas.clear(),this.cartasDisponibles=this.generarBaraja(),this.sacarCarta()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-mayormenor"]],decls:21,vars:4,consts:[[1,"mayor-menor-background"],[1,"mayor-menor-container"],[1,"or-text"],[1,"carta-container"],["alt","Carta Actual",1,"carta",3,"src"],[1,"botones"],[1,"boton",3,"click"],[1,"mensaje"],[1,"puntos"],[1,"boton","reiniciar-boton"],[1,"boton","reiniciar-boton",3,"click"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),s(3,"\xBFMayor "),a(4,"span",2),s(5,"o"),i(),s(6," Menor?"),i(),a(7,"div",3),d(8,"img",4),i(),a(9,"div",5)(10,"button",6),g("click",function(){return o.verificarSeleccion("mayor")}),s(11,"Mayor"),i(),a(12,"span",2),s(13,"\xBFo?"),i(),a(14,"button",6),g("click",function(){return o.verificarSeleccion("menor")}),s(15,"Menor"),i()(),a(16,"div",7),s(17),i(),a(18,"div",8),s(19),i(),m(20,ke,2,0,"button",9),i()()),e&2&&(r(8),c("src","images/cartas/"+o.cartaActual,y),r(9),k(o.mensaje),r(2),_("Puntos: ",o.puntos,""),r(),Y(o.mensaje=="No quedan m\xE1s cartas. Fin del juego."?20:-1))},styles:[".mayor-menor-background[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,#f0f8ffe6,#007bff1a);padding:80px 20px;min-height:60vh;display:flex;align-items:center;justify-content:center}.mayor-menor-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fff;border-radius:20px;box-shadow:0 5px 25px #00000026;padding:50px 30px;max-width:450px;position:relative;overflow:hidden}.carta-container[_ngcontent-%COMP%]{margin:20px 0;z-index:1}.carta[_ngcontent-%COMP%]{width:200px;border-radius:15px;transition:transform .3s,box-shadow .3s}.carta[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 4px 15px #0003}.botones[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px;z-index:1}.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 10px;padding:12px 24px;font-size:18px;font-weight:700;cursor:pointer;background-color:#007bff;color:#fff;border:none;border-radius:5px;transition:background-color .3s,transform .3s}.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}.mensaje[_ngcontent-%COMP%]{margin-top:20px;font-size:20px;font-weight:600;color:#333;text-align:center;z-index:1;background-color:#fffc;border-radius:10px;padding:10px}.puntos[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-top:10px;color:#007bff}.or-text[_ngcontent-%COMP%]{font-weight:700;font-size:2.5rem;color:#007bff;text-shadow:2px 2px 4px rgba(0,0,0,.2);margin:0 10px;transition:transform .3s}.reiniciar-boton[_ngcontent-%COMP%]{background-color:#4caf50;border:none;color:#fff;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:10px 2px;cursor:pointer;border-radius:5px;transition:background-color .3s,transform .2s}.reiniciar-boton[_ngcontent-%COMP%]:hover{background-color:#45a049;transform:scale(1.05)}.reiniciar-boton[_ngcontent-%COMP%]:active{transform:scale(.95)}"]})};var S=class n{temaSeleccionadoSubject=new G(null);temaSeleccionado$=this.temaSeleccionadoSubject.asObservable();seleccionarTema(t){this.temaSeleccionadoSubject.next(t)}limpiarTema(){this.temaSeleccionadoSubject.next(null)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=j({token:n,factory:n.\u0275fac,providedIn:"root"})};var w=class n{constructor(t){this.http=t}baseUrl="https://restcountries.com/v3.1/name";obtenerBandera(t){let e=`${this.baseUrl}/${t}`;return this.http.get(e)}static \u0275fac=function(e){return new(e||n)(q(re))};static \u0275prov=j({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ie=(n,t)=>({correcto:n,incorrecto:t});function je(n,t){if(n&1&&d(0,"img",9),n&2){let e=p(2);c("src",e.banderaUrl,y)}}function Ae(n,t){if(n&1&&d(0,"img",10),n&2){let e=p(2);c("src",e.banderaUrl,y)}}function Ee(n,t){if(n&1&&d(0,"img",11),n&2){let e=p(2);c("src",e.preguntaActual.imagen,y)}}function Te(n,t){if(n&1){let e=b();a(0,"li",12),g("click",function(){let l=u(e).$implicit,x=p(2);return f(x.puedeSeleccionar?x.verificarRespuesta(l):null)}),s(1),i()}if(n&2){let e=t.$implicit,o=p(2);W("disabled",!o.puedeSeleccionar),r(),_(" ",e," ")}}function Fe(n,t){if(n&1&&(a(0,"div",13),s(1),i()),n&2){let e=p(2);c("ngClass",M(2,Ie,e.mensaje.includes("Correcta"),e.mensaje.includes("Incorrecta"))),r(),_(" ",e.mensaje," ")}}function ze(n,t){if(n&1&&(a(0,"div",2)(1,"h2"),s(2),i(),m(3,je,1,1,"img",3)(4,Ae,1,1,"img",4)(5,Ee,1,1,"img",5),a(6,"p",6),s(7),i(),a(8,"ul"),m(9,Te,2,3,"li",7),i(),m(10,Fe,2,5,"div",8),i()),n&2){let e=p();r(2),_("Preguntas de ",e.tema,""),r(),c("ngIf",e.preguntaActual.pregunta==="\xBFCu\xE1l es la capital de Francia?"),r(),c("ngIf",e.preguntaActual.pregunta==="\xBFQu\xE9 bandera es esta?"),r(),c("ngIf",e.preguntaActual.imagen&&e.preguntaActual.pregunta!=="\xBFCu\xE1l es la capital de Francia?"),r(2),k(e.preguntaActual.pregunta),r(2),c("ngForOf",e.preguntaActual.opciones),r(),c("ngIf",e.mensaje)}}function Re(n,t){n&1&&(a(0,"div",14)(1,"p"),s(2,"No hay preguntas disponibles para este tema."),i()())}var D=class n{constructor(t,e,o){this.temaService=t;this.banderasService=e;this.router=o}tema;preguntaActual=null;mensaje=null;banderaUrl=null;puedeSeleccionar=!0;preguntasRespondidas=[];ngOnInit(){this.cargarPregunta()}cargarPregunta(){let e={Historia:[{pregunta:"\xBFQui\xE9n fue el primer presidente de EE. UU.?",opciones:["George Washington","Abraham Lincoln","John Adams"],respuestaCorrecta:"George Washington",imagen:"images/preguntados/casa_blanca.jpg"},{pregunta:"\xBFQu\xE9 a\xF1o comenz\xF3 la Segunda Guerra Mundial?",opciones:["1939","1945","1914"],respuestaCorrecta:"1939",imagen:"images/preguntados/segunda_guerra_mundial.jpg"}],Deportes:[{pregunta:"\xBFCu\xE1ntos jugadores hay en un equipo de f\xFAtbol?",opciones:["11","9","7"],respuestaCorrecta:"11",imagen:"images/preguntados/futbol.jpg"},{pregunta:"\xBFEn qu\xE9 deporte se utiliza una raqueta?",opciones:["Tenis","B\xE9isbol","F\xFAtbol"],respuestaCorrecta:"Tenis",imagen:"images/preguntados/raqueta.jpeg"}],Arte:[{pregunta:"\xBFQui\xE9n pint\xF3 la Mona Lisa?",opciones:["Vincent van Gogh","Leonardo da Vinci","Pablo Picasso"],respuestaCorrecta:"Leonardo da Vinci",imagen:"images/preguntados/mona_lisa.jpg"},{pregunta:"\xBFQu\xE9 movimiento art\xEDstico es conocido por su enfoque en la luz?",opciones:["Impresionismo","Cubismo","Surrealismo"],respuestaCorrecta:"Impresionismo",imagen:"images/preguntados/impresionismo.jpg"}],Geograf\u00EDa:[{pregunta:"\xBFCu\xE1l es la capital de Francia?",opciones:["Berl\xEDn","Madrid","Par\xEDs"],respuestaCorrecta:"Par\xEDs",imagen:""},{pregunta:"\xBFQu\xE9 bandera es esta?",opciones:["Italia","Nueva Zelanda","Canad\xE1"],respuestaCorrecta:"Italia",imagen:""},{pregunta:"\xBFQu\xE9 pa\xEDs es conocido como la tierra de los canguros?",opciones:["Australia","Sud\xE1frica","Canad\xE1"],respuestaCorrecta:"Australia",imagen:"images/preguntados/canguro.jpeg"}],Ciencia:[{pregunta:"\xBFCu\xE1l es el hueso m\xE1s largo del cuerpo humano?",opciones:["F\xE9mur","H\xFAmero","Tibia"],respuestaCorrecta:"F\xE9mur",imagen:"images/preguntados/huesos.jpg"}],Entretenimiento:[{pregunta:"\xBFQui\xE9n escribi\xF3 la serie de libros de Harry Potter?",opciones:["J.K. Rowling","Stephen King","George R.R. Martin"],respuestaCorrecta:"J.K. Rowling",imagen:"images/preguntados/harry_potter.jpeg"}]}[this.tema]||[];this.preguntaActual=e[Math.floor(Math.random()*e.length)];let o=e.filter(l=>!this.preguntasRespondidas.includes(l.pregunta));o.length>0?(this.preguntaActual=o[Math.floor(Math.random()*o.length)],this.preguntasRespondidas.push(this.preguntaActual.pregunta)):setTimeout(()=>{this.temaService.limpiarTema(),this.preguntaActual=null},100),this.preguntaActual&&this.preguntaActual.pregunta==="\xBFCu\xE1l es la capital de Francia?"?this.cargarBandera("France"):this.preguntaActual&&this.preguntaActual.pregunta==="\xBFQu\xE9 bandera es esta?"?this.cargarBandera("Italy"):this.preguntaActual&&(this.banderaUrl=this.preguntaActual.imagen??null)}cargarBandera(t){this.banderasService.obtenerBandera(t).subscribe(e=>{this.banderaUrl=e[0].flags.svg},e=>{console.error("Error al obtener la bandera:",e),this.banderaUrl=null})}verificarRespuesta(t){this.preguntaActual&&this.puedeSeleccionar&&(this.puedeSeleccionar=!1,t===this.preguntaActual.respuestaCorrecta?(this.mensaje="\xA1Respuesta Correcta!",setTimeout(()=>{this.mensaje=null,this.cargarPregunta(),this.puedeSeleccionar=!0},2e3)):(this.mensaje="Respuesta Incorrecta.",setTimeout(()=>{this.mensaje=null,this.puedeSeleccionar=!0,this.cargarPregunta()},2e3)))}ngOnDestroy(){this.temaService.limpiarTema()}static \u0275fac=function(e){return new(e||n)(C(S),C(w),C(F))};static \u0275cmp=h({type:n,selectors:[["app-preguntados"]],inputs:{tema:"tema"},decls:2,vars:2,consts:[["class","preguntas-container",4,"ngIf"],["class","no-preguntas",4,"ngIf"],[1,"preguntas-container"],["alt","Bandera de Francia","class","bandera",3,"src",4,"ngIf"],["alt","Bandera de Italia","class","bandera",3,"src",4,"ngIf"],["alt","Imagen relacionada","class","imagen-contexto",3,"src",4,"ngIf"],[1,"pregunta"],["class","opcion",3,"disabled","click",4,"ngFor","ngForOf"],["class","mensaje",3,"ngClass",4,"ngIf"],["alt","Bandera de Francia",1,"bandera",3,"src"],["alt","Bandera de Italia",1,"bandera",3,"src"],["alt","Imagen relacionada",1,"imagen-contexto",3,"src"],[1,"opcion",3,"click"],[1,"mensaje",3,"ngClass"],[1,"no-preguntas"]],template:function(e,o){e&1&&m(0,ze,11,7,"div",0)(1,Re,3,0,"div",1),e&2&&(c("ngIf",o.preguntaActual),r(),c("ngIf",!o.preguntaActual))},dependencies:[T,O,P],styles:[".preguntas-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 2px 5px #0000001a;width:80%;max-width:600px;margin:0 auto 40px}.preguntas-container[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.preguntas-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px;color:#2c3e50;font-size:1.8em;text-align:center}.pregunta[_ngcontent-%COMP%]{font-size:1.5em;margin-bottom:20px;color:#34495e;text-align:center}.preguntas-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;width:100%}.preguntas-container[_ngcontent-%COMP%]   .opcion[_ngcontent-%COMP%]{padding:15px;border:1px solid #ddd;border-radius:8px;margin-bottom:10px;background-color:#ecf0f1;transition:background-color .3s,transform .2s;cursor:pointer;text-align:center}.preguntas-container[_ngcontent-%COMP%]   .opcion[_ngcontent-%COMP%]:hover{background-color:#bdc3c7;transform:translateY(-2px)}.preguntas-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto;border-radius:12px;margin-bottom:20px;box-shadow:0 2px 5px #0003}.mensaje[_ngcontent-%COMP%]{margin-top:20px;font-size:1.2em;font-weight:700;text-align:center}.correcto[_ngcontent-%COMP%]{color:#27ae60}.incorrecto[_ngcontent-%COMP%]{color:#e74c3c}.no-preguntas[_ngcontent-%COMP%]{color:#7f8c8d;text-align:center;font-size:1.2em;margin-top:20px}.preguntas-container[_ngcontent-%COMP%]   .opcion.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5}"]})};var Ve=["ruleta"],V=class n{constructor(t,e){this.router=t;this.temaService=e}ruletaRef;temas=["Historia","Deportes","Arte","Entretenimiento","Corona","Geograf\xEDa","Ciencia"];ngAfterViewInit(){this.ruletaRef.nativeElement.addEventListener("click",()=>this.girar())}girar(){let t=Math.random()*7200;this.calcular(t)}tematica(t){console.log("TEMATICA SELECCIONADA: "+t),this.temaService.seleccionarTema(t)}calcular(t){let e=t%360,o=this.ruletaRef.nativeElement;o.style.transform=`rotate(${t}deg)`,setTimeout(()=>{let l=this.obtenerTema(e),x=this.temas[l];this.tematica(x)},5e3)}obtenerTema(t){let o=360/this.temas.length,l=(360-t+25.71)%360;return Math.floor(l/o)}static \u0275fac=function(e){return new(e||n)(C(F),C(S))};static \u0275cmp=h({type:n,selectors:[["app-ruleta"]],viewQuery:function(e,o){if(e&1&&Z(Ve,5),e&2){let l;X(l=ee())&&(o.ruletaRef=l.first)}},decls:8,vars:0,consts:[["ruleta",""],[1,"ruleta-container"],[1,"vara"],["src","images/preguntados/ruleta_preguntados3.png","id","ruleta","alt","Ruleta"],[1,"contador"],[1,"elije"]],template:function(e,o){e&1&&(a(0,"div",1),d(1,"div",2),a(2,"div"),d(3,"img",3,0),i(),d(5,"div",4),a(6,"div",5),s(7,"\xA1Haz clic para girar la ruleta!"),i()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.ruleta-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background-color:#000000cd;padding:20px;border-radius:10px;box-shadow:0 4px 8px #0003}.vara[_ngcontent-%COMP%]{height:70px;width:15px;background-color:#aaa;margin:auto;position:relative;top:10px;border-radius:0 0 8px 8px;border:1px solid #000;border-top:5px solid #000;z-index:1000}img[_ngcontent-%COMP%]{z-index:100;transition:all 5s;max-width:100%;height:auto;border-radius:10px;margin-top:20px}.contador[_ngcontent-%COMP%]{font-size:1.5em;color:#333;margin-top:20px}.elije[_ngcontent-%COMP%]{font-size:1.5em;color:#2980b9;margin-top:20px;text-align:center;padding:10px;background-color:#2980b91a;border:2px solid #2980b9;border-radius:8px;transition:all .3s ease}.elije[_ngcontent-%COMP%]:hover{background-color:#2980b933;transform:scale(1.05);color:#fff}"]})};function Be(n,t){if(n&1){let e=b();a(0,"div",5),d(1,"img",6),a(2,"h2",7),s(3,"\xA1Bienvenido a Preguntados!"),i(),a(4,"p"),s(5,"Haz clic en el bot\xF3n para comenzar a jugar."),i(),a(6,"button",8),g("click",function(){u(e);let l=p();return f(l.iniciarJuego())}),s(7,"Comenzar"),i()()}}function Le(n,t){n&1&&d(0,"app-ruleta")}function Je(n,t){if(n&1&&d(0,"app-preguntados",9),n&2){let e=p();c("tema",e.temaSeleccionado)}}var N=class n{constructor(t){this.temaService=t}temaSeleccionado=null;juegoIniciado=!1;ngOnInit(){this.temaService.temaSeleccionado$.subscribe(t=>{this.temaSeleccionado=t})}iniciarJuego(){this.juegoIniciado=!0}static \u0275fac=function(e){return new(e||n)(C(S))};static \u0275cmp=h({type:n,selectors:[["app-preguntados-main"]],decls:5,vars:3,consts:[[1,"background-container"],[1,"container"],["class","introduccion",4,"ngIf"],[4,"ngIf"],[3,"tema",4,"ngIf"],[1,"introduccion"],["src","images/preguntados/bienvenida_preguntados.png","alt","Logo de Preguntados",1,"logo-preguntados"],[1,"titulo-ruleta"],[1,"btn-iniciar",3,"click"],[3,"tema"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1),m(2,Be,8,0,"div",2)(3,Le,1,0,"app-ruleta",3)(4,Je,1,1,"app-preguntados",4),i()()),e&2&&(r(2),c("ngIf",!o.juegoIniciado),r(),c("ngIf",o.juegoIniciado&&!o.temaSeleccionado),r(),c("ngIf",o.temaSeleccionado))},dependencies:[P,D,V],styles:[".background-container[_ngcontent-%COMP%]{background-color:#2774b7;padding:50px 0;display:flex;justify-content:center;align-items:center;min-height:100vh}.container[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:0 4px 20px #0000001a;padding:50px;text-align:center;transition:transform .3s;width:90%;max-width:800px;min-height:400px;margin:0 auto}.container[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.logo-preguntados[_ngcontent-%COMP%]{width:300px;height:auto;margin-bottom:20px;transition:transform .3s}.logo-preguntados[_ngcontent-%COMP%]:hover{transform:rotate(5deg)}.titulo-ruleta[_ngcontent-%COMP%]{font-size:2em;color:#333;margin-bottom:15px;text-shadow:1px 1px 2px rgba(0,0,0,.2)}.btn-iniciar[_ngcontent-%COMP%]{padding:10px 20px;font-size:1.2em;color:#fff;background-color:#007bff;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s,transform .3s}.btn-iniciar[_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:scale(1.05)}"]})};var ue=(n,t)=>({left:n,top:t});function Ue(n,t){if(n&1&&d(0,"div",6),n&2){let e=t.$implicit;c("ngStyle",M(1,ue,e.x*20+"px",e.y*20+"px"))}}function He(n,t){if(n&1){let e=b();a(0,"div",7)(1,"p"),s(2),i(),a(3,"button",8),g("click",function(){u(e);let l=p();return f(l.startGame())}),s(4,"Reiniciar"),i()()}if(n&2){let e=p();r(2),_("Game Over! Puntuaci\xF3n: ",e.score,"")}}var B=class n{snake=[{x:5,y:5}];food=this.generateFood();direction={x:0,y:0};gameInterval;score=0;gameOver=!1;ngOnInit(){this.startGame()}startGame(){this.gameOver=!1,this.snake=[{x:5,y:5}],this.food=this.generateFood(),this.direction={x:0,y:0},this.score=0,this.gameInterval=setInterval(()=>{this.gameOver||(this.moveSnake(),this.checkCollision(),this.checkFood())},100)}moveSnake(){let t={x:this.snake[0].x+this.direction.x,y:this.snake[0].y+this.direction.y};this.snake.unshift(t),this.snake.pop()}checkCollision(){let t=this.snake[0],e=25;if(t.x<0||t.x>=e||t.y<0||t.y>=e){this.gameOver=!0,clearInterval(this.gameInterval);return}for(let o=1;o<this.snake.length;o++)if(t.x===this.snake[o].x&&t.y===this.snake[o].y){this.gameOver=!0,clearInterval(this.gameInterval);return}}checkFood(){if(this.snake[0].x===this.food.x&&this.snake[0].y===this.food.y){this.score++;let t={x:this.snake[this.snake.length-1].x,y:this.snake[this.snake.length-1].y};this.snake.push(t),this.food=this.generateFood()}}generateFood(){let t;do t={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)};while(this.snake.some(e=>e.x===t.x&&e.y===t.y));return t}handleKeyboardEvent(t){switch(t.key){case"ArrowUp":this.direction.y!==1&&(this.direction={x:0,y:-1});break;case"ArrowDown":this.direction.y!==-1&&(this.direction={x:0,y:1});break;case"ArrowLeft":this.direction.x!==1&&(this.direction={x:-1,y:0});break;case"ArrowRight":this.direction.x!==-1&&(this.direction={x:1,y:0});break}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["app-laberinto"]],hostBindings:function(e,o){e&1&&g("keydown",function(x){return o.handleKeyboardEvent(x)},!1,K)},decls:7,vars:6,consts:[[1,"game-container"],[1,"game-title"],[1,"game-board"],["class","snake-segment",3,"ngStyle",4,"ngFor","ngForOf"],[1,"food",3,"ngStyle"],["class","game-over",4,"ngIf"],[1,"snake-segment",3,"ngStyle"],[1,"game-over"],[1,"restart-button",3,"click"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"h1",1),s(2,"Juego de la Serpiente"),i(),a(3,"div",2),m(4,Ue,1,4,"div",3),d(5,"div",4),i(),m(6,He,5,1,"div",5),i()),e&2&&(r(4),c("ngForOf",o.snake),r(),c("ngStyle",M(3,ue,o.food.x*20+"px",o.food.y*20+"px")),r(),c("ngIf",o.gameOver))},dependencies:[O,P,ie],styles:[".game-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:linear-gradient(to bottom right,#e9ecef,#d1e8e2);background-size:20px 20px}.game-title[_ngcontent-%COMP%]{font-size:32px;color:#2980b9;margin-bottom:20px;font-family:Arial,sans-serif;text-shadow:1px 1px 2px rgba(0,0,0,.2)}.game-board[_ngcontent-%COMP%]{position:relative;width:500px;height:500px;background-color:#fff;border:2px solid #2980b9;border-radius:10px;box-shadow:0 4px 15px #0003}.snake-segment[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;background-color:#27ae60;border-radius:4px;box-shadow:0 2px 5px #0000001a}.food[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;background-color:#e74c3c;border-radius:50%;box-shadow:0 2px 5px #0003}.game-over[_ngcontent-%COMP%]{text-align:center;margin-top:20px;font-size:24px;color:#e74c3c}.restart-button[_ngcontent-%COMP%]{background-color:#2980b9;color:#fff;font-size:18px;border:none;border-radius:8px;padding:10px 20px;cursor:pointer;transition:background-color .3s,transform .2s;margin-top:20px}.restart-button[_ngcontent-%COMP%]:hover{background-color:#3498db;transform:scale(1.05)}.restart-button[_ngcontent-%COMP%]:active{background-color:#2980b9;transform:scale(.95)}"]})};var Qe=[{path:"ahorcado",component:z},{path:"mayor-menor",component:R},{path:"preguntados",component:N},{path:"snake",component:B}],L=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=E({type:n});static \u0275inj=A({imports:[H.forChild(Qe),H]})};var fe=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=E({type:n});static \u0275inj=A({providers:[w],imports:[ae,L,ge,se]})};export{fe as JuegosModule};
