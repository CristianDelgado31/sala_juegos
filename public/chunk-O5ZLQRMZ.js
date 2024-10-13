import{A as te,G as Oe,J as we,O as Se,P as ke,Q as Ie,T as je,a as ve,b as Me,g as Pe,j as X,r as k,s as y,u as Z,v as I,va as Ee,w as P,wa as Ae,y as ye,z as ee}from"./chunk-H7V6UY2I.js";import{$a as re,$b as ge,Ab as ce,Bb as a,Cb as i,Db as u,Eb as K,Fb as Y,Hb as C,Ic as V,Jc as S,Kb as g,Kc as M,Lc as he,Mb as p,Nc as be,Oc as _e,Pc as Ce,Qb as le,Rb as pe,Sb as de,Wb as r,Xb as v,Ya as E,Yb as b,Zb as me,_b as ue,bb as s,cb as f,cc as w,da as D,dc as W,ea as z,ec as fe,fc as xe,h as oe,ia as ae,l as ie,na as _,oa as N,sb as m,va as x,wa as h,wb as l,yb as se}from"./chunk-3EJBVJJG.js";var j=class n{temaSeleccionadoSubject=new ie(null);temaSeleccionado$=this.temaSeleccionadoSubject.asObservable();seleccionarTema(t){this.temaSeleccionadoSubject.next(t)}limpiarTema(){this.temaSeleccionadoSubject.next(null)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})};var A=class n{constructor(t){this.http=t}baseUrl="https://restcountries.com/v3.1/region";obtenerBanderasPorContinente(t){let e=`${this.baseUrl}/${t}`;return this.http.get(e)}obtenerBandera(t){let e=`https://restcountries.com/v3.1/name/${t}?fullText=true`;return this.http.get(e)}static \u0275fac=function(e){return new(e||n)(ae(ve))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ne=(n,t)=>({correcto:n,incorrecto:t});function Ve(n,t){if(n&1&&u(0,"img",10),n&2){let e=p(2);l("src",e.banderaUrl,E)}}function Be(n,t){if(n&1){let e=C();a(0,"li",11),g("click",function(){let c=x(e).$implicit,d=p(2);return h(d.puedeSeleccionar?d.verificarRespuesta(c):null)}),r(1),i()}if(n&2){let e=t.$implicit,o=p(2);se("disabled",!o.puedeSeleccionar),s(),b(" ",e," ")}}function Je(n,t){if(n&1&&(a(0,"div",12),r(1),i()),n&2){let e=p(2);l("ngClass",w(2,Ne,e.mensaje.includes("Correcta"),e.mensaje.includes("Incorrecta"))),s(),b(" ",e.mensaje," ")}}function Le(n,t){if(n&1&&(a(0,"div",5)(1,"h2"),r(2),i(),m(3,Ve,1,1,"img",6),a(4,"p",7),r(5),i(),a(6,"ul"),m(7,Be,2,3,"li",8),i(),m(8,Je,2,5,"div",9),i()),n&2){let e=p();s(2),b("Preguntas de ",e.tema,""),s(),l("ngIf",e.banderaUrl),s(2),v(e.preguntaActual.pregunta),s(2),l("ngForOf",e.preguntaActual.opciones),s(),l("ngIf",e.mensaje)}}function $e(n,t){n&1&&u(0,"img",2)(1,"img",2)(2,"img",2)}function He(n,t){n&1&&u(0,"img",2)(1,"img",2)}function Ue(n,t){n&1&&u(0,"img",2)}function qe(n,t){if(n&1){let e=C();a(0,"button",13),g("click",function(){x(e);let c=p();return h(c.reiniciarJuego())}),r(1,"Reiniciar"),i()}}function Ge(n,t){n&1&&(a(0,"div",14)(1,"p"),r(2,"No hay preguntas disponibles para este continente."),i()())}var B=class n{constructor(t,e,o){this.temaService=t;this.banderasService=e;this.firebase=o}tema;preguntaActual=null;mensaje=null;banderaUrl=null;puedeSeleccionar=!0;preguntasRespondidas=[];puntaje=0;paises=[];vidas=3;juegoTerminado=!1;ngOnInit(){this.obtenerPaisesPorContinente(),this.tema==="Americas"?this.tema="America":this.tema==="Europe"&&(this.tema="Europa")}obtenerPaisesPorContinente(){this.banderasService.obtenerBanderasPorContinente(this.tema).subscribe(t=>{this.paises=t,this.cargarPregunta()})}cargarPregunta(){if(this.preguntasRespondidas.length>=this.paises.length){this.mensaje="Has respondido todas las preguntas. \xA1Gracias por jugar!";return}let t=Math.floor(Math.random()*this.paises.length),e=this.paises[t];if(this.preguntasRespondidas.includes(e.name.common)){this.cargarPregunta();return}let o=e.translations?.spa?.common||e.name.common;this.preguntaActual={pregunta:`\xBFCu\xE1l es la capital de ${o}?`,opciones:this.generarOpciones(e),respuestaCorrecta:e.capital[0],imagen:e.flags.svg},this.preguntasRespondidas.push(o),this.banderaUrl=e.flags.svg}generarOpciones(t){let e=new Set,o=t.capital[0];for(o&&e.add(o);e.size<3;){let d=Math.floor(Math.random()*this.paises.length),F=this.paises[d];F.name.common!==t.name.common&&F.capital.length>0&&e.add(F.capital[0])}let c=Array.from(e);return this.mezclarOpciones(c)}mezclarOpciones(t){for(let e=t.length-1;e>0;e--){let o=Math.floor(Math.random()*(e+1));[t[e],t[o]]=[t[o],t[e]]}return t}verificarRespuesta(t){this.preguntaActual&&this.puedeSeleccionar&&!this.juegoTerminado&&(this.puedeSeleccionar=!1,t===this.preguntaActual.respuestaCorrecta?(this.mensaje="\xA1Respuesta Correcta!",this.puntaje+=50):(this.vidas-=1,this.mensaje="Respuesta Incorrecta.",this.vidas===0&&(this.juegoTerminado=!0,this.mensaje="\xA1Has perdido! Juego terminado.",this.guardarPuntaje())),setTimeout(()=>{this.mensaje=null,this.juegoTerminado||this.cargarPregunta(),this.puedeSeleccionar=!0},2e3))}reiniciarJuego(){this.ngOnDestroy()}ngOnDestroy(){this.temaService.limpiarTema()}guardarPuntaje(){let t=JSON.parse(localStorage.getItem("user")),e=t.email.split("@")[0],o=k.fromDate(new Date),c={email:t.email,fecha:o,juego:"preguntados",puntos:this.puntaje,username:e},d=P(this.firebase,"resultados");I(d,c)}static \u0275fac=function(e){return new(e||n)(f(j),f(A),f(y))};static \u0275cmp=_({type:n,selectors:[["app-preguntas"]],inputs:{tema:"tema"},decls:7,vars:4,consts:[["class","preguntas-container",4,"ngIf"],[1,"corazones"],["src","gifs/pixel-heart.gif","alt","Coraz\xF3n",1,"corazon"],["class","reiniciar",3,"click",4,"ngIf"],["class","no-preguntas",4,"ngIf"],[1,"preguntas-container"],["alt","Bandera","class","bandera",3,"src",4,"ngIf"],[1,"pregunta"],["class","opcion",3,"disabled","click",4,"ngFor","ngForOf"],["class","mensaje",3,"ngClass",4,"ngIf"],["alt","Bandera",1,"bandera",3,"src"],[1,"opcion",3,"click"],[1,"mensaje",3,"ngClass"],[1,"reiniciar",3,"click"],[1,"no-preguntas"]],template:function(e,o){e&1&&(m(0,Le,9,5,"div",0),a(1,"div",1),m(2,$e,3,0)(3,He,2,0)(4,Ue,1,0,"img",2),i(),m(5,qe,2,0,"button",3)(6,Ge,3,0,"div",4)),e&2&&(l("ngIf",o.preguntaActual),s(2),ce(o.vidas===3?2:o.vidas===2?3:o.vidas===1?4:-1),s(3),l("ngIf",o.vidas===0),s(),l("ngIf",!o.preguntaActual))},dependencies:[V,S,M],styles:[".preguntas-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 2px 5px #0000001a;width:80%;max-width:600px;margin:0 auto 40px}.preguntas-container[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.preguntas-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px;color:#2c3e50;font-size:1.8em;text-align:center}.pregunta[_ngcontent-%COMP%]{font-size:1.5em;margin-bottom:20px;color:#34495e;text-align:center}.preguntas-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;width:100%}.preguntas-container[_ngcontent-%COMP%]   .opcion[_ngcontent-%COMP%]{padding:15px;border:1px solid #ddd;border-radius:8px;margin-bottom:10px;background-color:#ecf0f1;transition:background-color .3s,transform .2s;cursor:pointer;text-align:center}.preguntas-container[_ngcontent-%COMP%]   .opcion[_ngcontent-%COMP%]:hover{background-color:#bdc3c7;transform:translateY(-2px)}.preguntas-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:auto;border-radius:12px;margin-bottom:20px;box-shadow:0 2px 5px #0003}.mensaje[_ngcontent-%COMP%]{margin-top:20px;font-size:1.2em;font-weight:700;text-align:center}.correcto[_ngcontent-%COMP%]{color:#27ae60}.incorrecto[_ngcontent-%COMP%]{color:#e74c3c}.no-preguntas[_ngcontent-%COMP%]{color:#7f8c8d;text-align:center;font-size:1.2em;margin-top:20px}.preguntas-container[_ngcontent-%COMP%]   .opcion.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5}.no-preguntas[_ngcontent-%COMP%]{background-color:#f8d7da;color:#721c24;border:1px solid #f5c6cb;padding:20px;border-radius:5px;text-align:center;margin:20px;font-family:Arial,sans-serif;font-size:18px}.reiniciar[_ngcontent-%COMP%]{background-color:#3498db;color:#fff;padding:10px 20px;border:none;border-radius:5px;font-size:1.2em;cursor:pointer;transition:background-color .3s;width:100%}.corazones[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px}.corazon[_ngcontent-%COMP%]{width:40px;height:auto;margin:0 10px}"]})};var Ke=["ruleta"],L=class n{constructor(t,e){this.router=t;this.temaService=e}ruletaRef;isSpinning=!1;temas=["Americas","Europe","Asia","Oceania","Africa"];ngAfterViewInit(){this.ruletaRef.nativeElement.addEventListener("click",()=>this.girar())}girar(){if(this.isSpinning)return;this.isSpinning=!0;let t=Math.random()*7200;this.calcular(t)}tematica(t){console.log("TEMATICA SELECCIONADA: "+t),this.temaService.seleccionarTema(t)}calcular(t){let e=t%360,o=this.ruletaRef.nativeElement;o.style.transform=`rotate(${t}deg)`,setTimeout(()=>{let c=this.obtenerTema(e),d=this.temas[c];this.tematica(d),console.log("TEMA SELECCIONADO: "+d),this.isSpinning=!1},5e3)}obtenerTema(t){let e=this.temas.length,o=360/e,c=(360-t+22.71)%360;return Math.floor(c/o)%e}static \u0275fac=function(e){return new(e||n)(f(Pe),f(j))};static \u0275cmp=_({type:n,selectors:[["app-ruleta"]],viewQuery:function(e,o){if(e&1&&le(Ke,5),e&2){let c;pe(c=de())&&(o.ruletaRef=c.first)}},decls:8,vars:0,consts:[["ruleta",""],[1,"ruleta-container"],[1,"vara"],[1,"img-container"],["src","images/preguntados/ruleta_continentes4_sin_fondo.png","id","ruleta","alt","Ruleta"],[1,"contador"],[1,"elije"]],template:function(e,o){e&1&&(a(0,"div",1),u(1,"div",2),a(2,"div",3),u(3,"img",4,0),i(),u(5,"div",5),a(6,"div",6),r(7,"\xA1Haz clic para girar la ruleta!"),i()())},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.ruleta-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background-color:#393333;border-radius:10px;box-shadow:0 4px 8px #0003;padding:20px;width:90%;max-width:600px;margin:auto}.vara[_ngcontent-%COMP%]{height:70px;width:15px;background-color:#aaa;margin:auto;position:relative;top:10px;border-radius:0 0 8px 8px;border:1px solid #000;border-top:5px solid #000;z-index:1000}img[_ngcontent-%COMP%]{z-index:100;transition:all 5s;max-width:100%;height:450px;border-radius:10px}.contador[_ngcontent-%COMP%]{font-size:1.5em;color:#333;margin-top:20px}.elije[_ngcontent-%COMP%]{font-size:1.5em;color:#2980b9;margin-top:20px;text-align:center;padding:10px;background-color:#2980b91a;border:2px solid #2980b9;border-radius:8px;transition:all .3s ease}.elije[_ngcontent-%COMP%]:hover{background-color:#2980b933;transform:scale(1.05);color:#fff}@media (max-width: 600px){.contador[_ngcontent-%COMP%], .elije[_ngcontent-%COMP%]{font-size:1.2em}.vara[_ngcontent-%COMP%]{height:60px}img[_ngcontent-%COMP%]{max-width:90%;height:auto}}"]})};function We(n,t){if(n&1){let e=C();a(0,"div",4),u(1,"img",5),a(2,"h2",6),r(3,"\xA1Bienvenido a Preguntados!"),i(),a(4,"p"),r(5,"Haz clic en el bot\xF3n para comenzar a jugar."),i(),a(6,"button",7),g("click",function(){x(e);let c=p();return h(c.iniciarJuego())}),r(7,"Comenzar"),i()()}}function Xe(n,t){n&1&&u(0,"app-ruleta")}function Ze(n,t){if(n&1&&u(0,"app-preguntas",8),n&2){let e=p();l("tema",e.temaSeleccionado)}}var $=class n{constructor(t){this.temaService=t}temaSeleccionado=null;juegoIniciado=!1;ngOnInit(){this.temaService.temaSeleccionado$.subscribe(t=>{this.temaSeleccionado=t})}iniciarJuego(){this.juegoIniciado=!0}static \u0275fac=function(e){return new(e||n)(f(j))};static \u0275cmp=_({type:n,selectors:[["app-preguntados-main"]],decls:4,vars:3,consts:[[1,"container"],["class","introduccion",4,"ngIf"],[4,"ngIf"],[3,"tema",4,"ngIf"],[1,"introduccion"],["src","images/preguntados/fondo_banderas2.jpg","alt","Logo de Preguntados",1,"logo-preguntados"],[1,"titulo-ruleta"],[1,"btn-iniciar",3,"click"],[3,"tema"]],template:function(e,o){e&1&&(a(0,"div",0),m(1,We,8,0,"div",1)(2,Xe,1,0,"app-ruleta",2)(3,Ze,1,1,"app-preguntas",3),i()),e&2&&(s(),l("ngIf",!o.juegoIniciado),s(),l("ngIf",o.juegoIniciado&&!o.temaSeleccionado),s(),l("ngIf",o.temaSeleccionado))},dependencies:[M,B,L],styles:['.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:70vh;margin:8px auto 0;width:90%;max-width:700px;background-color:#1b1b1b;border-radius:15px;padding:20px;box-shadow:0 10px 30px #ff910080;transition:transform .3s,box-shadow .3s}.container[_ngcontent-%COMP%]:hover{transform:scale(1.02);box-shadow:0 15px 40px #000000b3}.logo-preguntados[_ngcontent-%COMP%]{width:100%;max-width:800px;height:300px;margin-bottom:20px;transition:transform .3s,filter .3s}.logo-preguntados[_ngcontent-%COMP%]:hover{transform:rotate(5deg);filter:brightness(1.1)}.titulo-ruleta[_ngcontent-%COMP%]{font-size:2em;color:#e74c3c;margin-bottom:15px;text-shadow:2px 2px 5px rgba(0,0,0,.6);font-family:"Press Start 2P",cursive;text-align:center}.btn-iniciar[_ngcontent-%COMP%]{padding:12px 260px;font-size:1.5em;color:#fff;background-color:#007bff;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s,transform .3s,box-shadow .3s;box-shadow:0 4px 10px #00000080;font-family:"Press Start 2P",cursive;margin-top:20px}.btn-iniciar[_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-3px);box-shadow:0 6px 15px #000000b3}@media (max-width: 576px){.container[_ngcontent-%COMP%]{padding:16px}.logo-preguntados[_ngcontent-%COMP%]{width:100%;max-width:100vw}.titulo-ruleta[_ngcontent-%COMP%]{font-size:1.5em}.btn-iniciar[_ngcontent-%COMP%]{padding:8px 30vw;font-size:1em;margin-top:10px}}p[_ngcontent-%COMP%]{color:#fff;font-size:1.1em;font-family:"Press Start 2P",cursive;text-align:center}']})};function et(n,t){if(n&1){let e=C();a(0,"div")(1,"button",13),g("click",function(){x(e);let c=p();return h(c.reiniciarJuego())}),r(2,"Reiniciar Juego"),i()()}}var H=class n{constructor(t){this.firestore=t}cartaActual="";cartaSiguiente="";puntos=0;mensaje="";cartasUsadas=new Set;cartasDisponibles=this.generarBaraja();ultimaCarta="";ngOnInit(){this.sacarCarta()}generarBaraja(){let t=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],e=["C","D","H","S"],o=[];for(let c of t)for(let d of e)o.push(`${c}${d}.png`);return o}sacarCarta(){this.cartaActual=this.obtenerCarta(),this.cartaSiguiente=this.obtenerCarta()}obtenerCarta(){if(this.cartasDisponibles.length===1&&(this.ultimaCarta=this.cartasDisponibles[0]),this.cartasDisponibles.length===0)return this.mensaje="No quedan m\xE1s cartas. Fin del juego.",this.cartaActual=this.ultimaCarta,"";let t;do{let e=Math.floor(Math.random()*this.cartasDisponibles.length);t=this.cartasDisponibles[e]}while(this.cartasUsadas.has(t));return this.cartasUsadas.add(t),this.cartasDisponibles=this.cartasDisponibles.filter(e=>e!==t),t}obtenerValor(t){let e={2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13,A:14},o=t.slice(0,t.length-5);return e[o]||0}verificarSeleccion(t){let e=this.obtenerValor(this.cartaActual),o=this.obtenerValor(this.cartaSiguiente);this.ultimaCarta||(t==="mayor"&&e<o||t==="menor"&&e>o?(this.puntos++,this.mensaje="\xA1Correcto! Puntos: "+this.puntos):this.mensaje="Incorrecto. La carta era: "+this.cartaSiguiente.slice(0,-4)),this.cartaActual=this.cartaSiguiente,this.cartaSiguiente=this.obtenerCarta()}reiniciarJuego(){this.guardarPuntuacion(),this.puntos=0,this.mensaje="",this.cartasUsadas.clear(),this.cartasDisponibles=this.generarBaraja(),this.sacarCarta()}get cartasRestantes(){return this.cartasDisponibles.length}guardarPuntuacion(){let t=JSON.parse(localStorage.getItem("user")),e=t.email.split("@")[0],o=k.fromDate(new Date),c={email:t.email,fecha:o,juego:"mayormenor",puntos:this.puntos,username:e};I(P(this.firestore,"resultados"),c)}static \u0275fac=function(e){return new(e||n)(f(y))};static \u0275cmp=_({type:n,selectors:[["app-mayormenor"]],decls:23,vars:4,consts:[[1,"mayor-menor-container"],[1,"titulo"],[1,"or-text"],[1,"cartas-container"],[1,"carta-container"],["alt","Carta Actual",1,"carta",3,"src"],[1,"carta-container","carta-dada-vuelta"],["src","images/cartas/carta_reves2.png","alt","Carta Dada Vuelta",1,"carta"],[1,"botones"],[1,"boton",3,"click"],[1,"puntos"],[1,"cartas-restantes"],[4,"ngIf"],[1,"boton","reiniciar-boton",3,"click"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"h1",1),r(2,"\xBFMayor "),a(3,"span",2),r(4,"o"),i(),r(5," Menor?"),i(),a(6,"div",3)(7,"div",4),u(8,"img",5),i(),a(9,"div",6),u(10,"img",7),i()(),a(11,"div",8)(12,"button",9),g("click",function(){return o.verificarSeleccion("mayor")}),r(13,"Mayor"),i(),a(14,"span",2),r(15,"\xBFo?"),i(),a(16,"button",9),g("click",function(){return o.verificarSeleccion("menor")}),r(17,"Menor"),i()(),a(18,"div",10),r(19),i(),a(20,"div",11),r(21),i(),m(22,et,3,0,"div",12),i()),e&2&&(s(8),l("src","images/cartas/"+o.cartaActual,E),s(11),b("Puntos: ",o.puntos,""),s(2),b("Cartas restantes: ",o.cartasRestantes,""),s(),l("ngIf",o.mensaje==="No quedan m\xE1s cartas. Fin del juego."))},dependencies:[M],styles:[".mayor-menor-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#1b1b1b;border-radius:20px;box-shadow:0 10px 30px #ff910080;padding:20px;max-width:90%;width:800px;margin:auto;height:auto;transition:transform .3s,box-shadow .3s;margin-top:8px!important}.mayor-menor-container[_ngcontent-%COMP%]:hover{transform:scale(1.02);box-shadow:0 15px 40px #000000b3}.mayor-menor-container[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{color:#e74c3c!important;font-size:2rem}.cartas-container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:20px;margin:20px 0}.carta[_ngcontent-%COMP%]{width:250px;border-radius:15px;transition:transform .3s,box-shadow .3s;box-shadow:0 4px 10px #0000001a}.carta[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 8px 20px #0000004d}.botones[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px}.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 5px;padding:12px 25px;font-size:18px;font-weight:700;cursor:pointer;background:linear-gradient(135deg,#007bff,#0056b3);color:#fff;border:none;border-radius:8px;transition:background-color .3s,transform .3s,box-shadow .3s;box-shadow:0 4px 10px #0003}.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px);box-shadow:0 6px 15px #0000004d}.or-text[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#fff;padding:5px 10px;border-radius:12px;transition:transform .3s,background-color .3s}.or-text[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.puntos[_ngcontent-%COMP%], .cartas-restantes[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin-top:10px;color:#007bff;text-align:center}.mensaje[_ngcontent-%COMP%]{margin-top:20px;font-size:18px;font-weight:600;color:#e74c3c;text-align:center;background-color:#ffffff1a;border-radius:10px;padding:10px;transition:transform .3s,background-color .3s}.mensaje[_ngcontent-%COMP%]:hover{background-color:#fff3;transform:scale(1.02)}.reiniciar-boton[_ngcontent-%COMP%]{margin-top:20px;padding:10px 20px;font-size:16px;cursor:pointer;border-radius:5px;background-color:#4caf50;color:#fff;transition:background-color .3s,transform .2s}.reiniciar-boton[_ngcontent-%COMP%]:hover{background-color:#45a049;transform:scale(1.05)}.reiniciar-boton[_ngcontent-%COMP%]:active{transform:scale(.95)}@media (max-width: 600px){.mayor-menor-container[_ngcontent-%COMP%]{padding:15px;width:95%}.titulo[_ngcontent-%COMP%]{font-size:5vw!important;text-align:center}.cartas-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.carta[_ngcontent-%COMP%]{width:80%;max-width:200px}.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 15px;font-size:14px}.puntos[_ngcontent-%COMP%], .cartas-restantes[_ngcontent-%COMP%]{font-size:14px}.mensaje[_ngcontent-%COMP%]{font-size:16px}.reiniciar-boton[_ngcontent-%COMP%]{padding:8px 15px;font-size:14px}}"]})};var Te=(n,t)=>({left:n,top:t});function tt(n,t){if(n&1&&u(0,"div",6),n&2){let e=t.$implicit;l("ngStyle",w(1,Te,e.x*20+"px",e.y*20+"px"))}}function nt(n,t){if(n&1){let e=C();a(0,"div",7)(1,"p"),r(2),i(),a(3,"button",8),g("click",function(){x(e);let c=p();return h(c.startGame())}),r(4,"Reiniciar"),i()()}if(n&2){let e=p();s(2),b("Game Over! Puntuaci\xF3n: ",e.score,"")}}var U=class n{constructor(t){this.firestore=t}snake=[{x:5,y:5}];food=this.generateFood();direction={x:0,y:0};gameInterval;score=0;gameOver=!1;ngOnInit(){this.startGame()}startGame(){this.gameOver=!1,this.snake=[{x:5,y:5}],this.food=this.generateFood(),this.direction={x:0,y:0},this.score=0,this.gameInterval=setInterval(()=>{this.gameOver||(this.moveSnake(),this.checkCollision(),this.checkFood())},100)}moveSnake(){let t={x:this.snake[0].x+this.direction.x,y:this.snake[0].y+this.direction.y};this.snake.unshift(t),this.snake.pop()}checkCollision(){let t=this.snake[0],e=25;if(t.x<0||t.x>=e||t.y<0||t.y>=e){this.gameOver=!0,clearInterval(this.gameInterval),this.guardarPuntaje();return}for(let o=1;o<this.snake.length;o++)if(t.x===this.snake[o].x&&t.y===this.snake[o].y){this.gameOver=!0,clearInterval(this.gameInterval),this.guardarPuntaje();return}}checkFood(){if(this.snake[0].x===this.food.x&&this.snake[0].y===this.food.y){this.score++;let t={x:this.snake[this.snake.length-1].x,y:this.snake[this.snake.length-1].y};this.snake.push(t),this.food=this.generateFood()}}generateFood(){let t;do t={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)};while(this.snake.some(e=>e.x===t.x&&e.y===t.y));return t}handleKeyboardEvent(t){switch(t.key){case"ArrowUp":this.direction.y!==1&&(this.direction={x:0,y:-1});break;case"ArrowDown":this.direction.y!==-1&&(this.direction={x:0,y:1});break;case"ArrowLeft":this.direction.x!==1&&(this.direction={x:-1,y:0});break;case"ArrowRight":this.direction.x!==-1&&(this.direction={x:1,y:0});break}}guardarPuntaje(){let t=JSON.parse(localStorage.getItem("user")),e=t.email.split("@")[0],o=k.fromDate(new Date),c={email:t.email,fecha:o,juego:"viborita",puntos:this.score,username:e},d=P(this.firestore,"resultados");I(d,c)}static \u0275fac=function(e){return new(e||n)(f(y))};static \u0275cmp=_({type:n,selectors:[["app-laberinto"]],hostBindings:function(e,o){e&1&&g("keydown",function(d){return o.handleKeyboardEvent(d)},!1,re)},decls:7,vars:6,consts:[[1,"game-container"],[1,"game-title"],[1,"game-board"],["class","snake-segment",3,"ngStyle",4,"ngFor","ngForOf"],[1,"food",3,"ngStyle"],["class","game-over",4,"ngIf"],[1,"snake-segment",3,"ngStyle"],[1,"game-over"],[1,"restart-button",3,"click"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"h1",1),r(2,"Juego de la Viborita"),i(),a(3,"div",2),m(4,tt,1,4,"div",3),u(5,"div",4),i(),m(6,nt,5,1,"div",5),i()),e&2&&(s(4),l("ngForOf",o.snake),s(),l("ngStyle",w(3,Te,o.food.x*20+"px",o.food.y*20+"px")),s(),l("ngIf",o.gameOver))},dependencies:[S,M,he],styles:["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%;margin:0;display:flex;justify-content:center;align-items:center;background-color:#ecf0f1}.game-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.game-title[_ngcontent-%COMP%]{font-size:36px;color:#e74c3c;margin-bottom:20px;text-align:center;text-shadow:2px 2px 4px rgba(0,0,0,.2);transition:transform .3s}.game-title[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.game-board[_ngcontent-%COMP%]{position:relative;width:500px;height:500px;background-color:#fff;border:2px solid #2980b9;border-radius:10px;box-shadow:0 4px 15px #0003}.snake-segment[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;background-color:#27ae60;border-radius:4px;box-shadow:0 2px 5px #0000001a}.food[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;background-color:#e74c3c;border-radius:50%;box-shadow:0 2px 5px #0003}.game-over[_ngcontent-%COMP%]{text-align:center;margin-top:20px;font-size:24px;color:#e74c3c}.restart-button[_ngcontent-%COMP%]{background-color:#2980b9;color:#fff;font-size:20px;border:none;border-radius:10px;padding:12px 24px;cursor:pointer;transition:background-color .3s,transform .2s;margin-top:20px;box-shadow:0 4px 10px #0003}.restart-button[_ngcontent-%COMP%]:hover{background-color:#3498db;transform:scale(1.05)}.restart-button[_ngcontent-%COMP%]:active{background-color:#2980b9;transform:scale(.95)}"]})};var ot=(n,t)=>({"mensaje-victoria":n,"mensaje-perdido":t}),it=(n,t)=>({"letra-correcta":n,"letra-incorrecta":t});function at(n,t){if(n&1){let e=C();a(0,"div")(1,"h2"),r(2,"Selecciona un T\xF3pico:"),i(),a(3,"select",3),ge("ngModelChange",function(c){x(e);let d=p();return ue(d.topicoSeleccionado,c)||(d.topicoSeleccionado=c),h(c)}),g("change",function(){x(e);let c=p();return h(c.seleccionarPalabra())}),a(4,"option",4),r(5,"Elige un T\xF3pico"),i(),a(6,"option",5),r(7,"Animales"),i(),a(8,"option",6),r(9,"Frutas"),i(),a(10,"option",7),r(11,"Pa\xEDses"),i(),a(12,"option",8),r(13,"Deportes"),i()(),a(14,"button",9),g("click",function(){x(e);let c=p();return h(c.iniciarJuego())}),r(15,"Iniciar Juego"),i()()}if(n&2){let e=p();s(3),me("ngModel",e.topicoSeleccionado),s(11),l("disabled",!e.topicoSeleccionado)}}function rt(n,t){if(n&1&&(K(0),r(1),Y()),n&2){let e=p().$implicit;s(),v(e)}}function st(n,t){n&1&&(K(0),r(1,"_"),Y())}function ct(n,t){if(n&1&&(a(0,"span",18),m(1,rt,2,1,"ng-container",2)(2,st,2,0,"ng-container",2),i()),n&2){let e=t.$implicit,o=p(2);s(),l("ngIf",o.letraAdivinada(e)),s(),l("ngIf",!o.letraAdivinada(e))}}function lt(n,t){if(n&1&&(a(0,"div",19),r(1),i()),n&2){let e=p(2);l("ngClass",w(2,ot,e.gano,e.perdio)),s(),b(" ",e.mensaje," ")}}function pt(n,t){if(n&1){let e=C();a(0,"div",20)(1,"button",21),g("click",function(){x(e);let c=p(2);return h(c.reiniciarJuego())}),r(2),i()()}if(n&2){let e=p(2);s(2),b(" ",e.perdio?"Reintentar":"Volver a Jugar"," ")}}function dt(n,t){if(n&1){let e=C();a(0,"button",22),g("click",function(){let c=x(e).$implicit,d=p(2);return h(d.adivinarLetra(c))}),r(1),i()}if(n&2){let e=t.$implicit,o=p(2);l("ngClass",w(3,it,o.letraAdivinada(e)&&o.palabraActual.includes(e),o.letraAdivinada(e)&&!o.palabraActual.includes(e)))("disabled",o.letraAdivinada(e)),s(),b(" ",e," ")}}function mt(n,t){if(n&1&&(a(0,"div")(1,"div",10),u(2,"img",11),i(),a(3,"div",12)(4,"h2"),m(5,ct,3,2,"span",13),i()(),m(6,lt,2,5,"div",14)(7,pt,3,1,"div",15),a(8,"div",16),m(9,dt,2,6,"button",17),i()()),n&2){let e=p();s(2),l("src",e.getImagen(),E),s(3),l("ngForOf",e.palabraActual.split("")),s(),l("ngIf",e.mensaje),s(),l("ngIf",e.perdio||e.gano),s(2),l("ngForOf",e.alfabeto)}}var q=class n{constructor(t){this.firestore=t}palabras={animales:["perro","gato"],frutas:["manzana","banana","naranja","frutilla","uva"],paises:["espana","mexico","japon","brasil","canada"],deportes:["futbol","baloncesto","tenis","natacion","ciclismo"]};palabraActual="";letrasAdivinadas=[];intentos=0;maxIntentos=6;alfabeto="abcdefghijklmnopqrstuvwxyz".split("");mensaje="";perdio=!1;gano=!1;topicoSeleccionado="";juegoIniciado=!1;puntos=0;resultados=[];iniciarJuego(){this.juegoIniciado=!0,this.seleccionarPalabra()}seleccionarPalabra(){if(this.topicoSeleccionado){let t=Math.floor(Math.random()*this.palabras[this.topicoSeleccionado].length);this.palabraActual=this.palabras[this.topicoSeleccionado][t],this.letrasAdivinadas=[],this.intentos=0,this.mensaje="",this.perdio=!1,this.gano=!1}}letraAdivinada(t){return this.letrasAdivinadas.includes(t)}adivinarLetra(t){!this.letrasAdivinadas.includes(t)&&!this.perdio&&!this.gano&&(this.letrasAdivinadas.push(t),this.palabraActual.includes(t)?this.puntos+=10:this.intentos++,this.verificarEstadoJuego())}verificarEstadoJuego(){this.intentos>=this.maxIntentos?(this.perdio=!0,this.mensaje="\xA1Perdiste! La palabra era: "+this.palabraActual,this.resultados.push({puntaje:this.puntos,topico:this.topicoSeleccionado})):this.palabraActual.split("").every(t=>this.letraAdivinada(t))&&(this.gano=!0,this.mensaje="\xA1Ganaste! La palabra era: "+this.palabraActual,this.puntos+=50,this.resultados.push({puntaje:this.puntos,topico:this.topicoSeleccionado}),console.log(this.resultados),this.seleccionarPalabra())}getImagen(){return`images/ahorcado/hangman${this.intentos}.png`}reiniciarJuego(){this.guardarResultados(),this.juegoIniciado=!1,this.topicoSeleccionado="",this.letrasAdivinadas=[],this.intentos=0,this.mensaje="",this.perdio=!1,this.gano=!1,this.puntos=0}guardarResultados(){let t=JSON.parse(localStorage.getItem("user")),e=t.email.split("@")[0],o=k.fromDate(new Date),c=this.resultados.reduce((Re,De)=>Re+De.puntaje,0),d={username:e,email:t.email,fecha:o,puntos:c,juego:"ahorcado"},F=P(this.firestore,"resultados");I(F,d),console.log("Resultados:",d)}static \u0275fac=function(e){return new(e||n)(f(y))};static \u0275cmp=_({type:n,selectors:[["app-ahorcado"]],decls:6,vars:2,consts:[[1,"main-container"],[1,"ahorcado-container"],[4,"ngIf"],[3,"ngModelChange","change","ngModel"],["value",""],["value","animales"],["value","frutas"],["value","paises"],["value","deportes"],[3,"click","disabled"],[1,"ahorcado-dibujo"],["alt","Ahorcado",1,"mu\xF1eco",3,"src"],[1,"palabra"],["class","letra",4,"ngFor","ngForOf"],["class","mensaje","style","text-align: center;",3,"ngClass",4,"ngIf"],["class","boton-reintentar-container",4,"ngIf"],[1,"botones-letras"],["class","letra-boton",3,"ngClass","disabled","click",4,"ngFor","ngForOf"],[1,"letra"],[1,"mensaje",2,"text-align","center",3,"ngClass"],[1,"boton-reintentar-container"],[1,"boton-reintentar",3,"click"],[1,"letra-boton",3,"click","ngClass","disabled"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),r(3,"Juego del Ahorcado"),i(),m(4,at,16,2,"div",2)(5,mt,10,5,"div",2),i()()),e&2&&(s(4),l("ngIf",!o.juegoIniciado),s(),l("ngIf",o.juegoIniciado))},dependencies:[V,S,M,ke,Ie,Se,Oe,we],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:80vh;margin-top:10px}.ahorcado-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;background-color:#1b1b1b;box-shadow:0 10px 30px #ff910080;transition:transform .3s,box-shadow .3s;border-radius:15px;padding:40px 50px;max-width:100%;margin:auto}.ahorcado-container[_ngcontent-%COMP%]:hover{transform:scale(1.02);box-shadow:0 15px 40px #000000b3}h1[_ngcontent-%COMP%]{color:#e74c3c;margin-bottom:20px;font-size:2.5rem;text-shadow:1px 1px 2px rgba(0,0,0,.2)}h2[_ngcontent-%COMP%]{color:#495057;margin:15px 0;font-size:2rem;text-align:center;font-weight:700;text-shadow:1px 1px 2px rgba(0,0,0,.2);letter-spacing:1px}select[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%;font-family:"Press Start 2P",cursive}button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-size:1rem;transition:background-color .3s;margin:0}button[_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-3px);box-shadow:0 6px 15px #000000b3}.botones-letras[_ngcontent-%COMP%]{margin:20px 0;display:flex;flex-wrap:wrap;justify-content:center}.letra-boton[_ngcontent-%COMP%]{background-color:#1e231f;color:#fff;border:none;padding:10px;border-radius:5px;margin:5px;cursor:pointer;transition:background-color .3s;width:20%;height:50px;font-size:1.5rem}.letra-boton[_ngcontent-%COMP%]:hover{background-color:#3360d3}.ahorcado-dibujo[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;justify-content:center}.mu\\f1 eco[_ngcontent-%COMP%]{width:100%;max-width:200px;height:auto}.mensaje[_ngcontent-%COMP%]{margin-top:20px;font-size:1.8rem;color:#fff;background-color:#000000b3;padding:15px;border-radius:10px;text-align:center;transition:background-color .3s}.mensaje-victoria[_ngcontent-%COMP%]{color:#1ca53c}.mensaje-perdido[_ngcontent-%COMP%]{color:#dc3545}.boton-reintentar[_ngcontent-%COMP%]{background-color:#ffc107;color:#000;padding:12px 20px;border-radius:10px;font-size:1.5rem;margin-top:15px;border:none;box-shadow:0 4px 8px #0003;transition:background-color .3s,transform .3s}.boton-reintentar[_ngcontent-%COMP%]:hover{background-color:#e0a800;transform:scale(1.05)}.palabra[_ngcontent-%COMP%]{margin:20px 0;display:flex;justify-content:center;font-size:2rem}.letra[_ngcontent-%COMP%]{margin:0 10px;display:inline-block;width:30px;text-align:center;color:#fafafa;transition:color .3s}.letra[_ngcontent-%COMP%]:empty{color:transparent}.letra-correcta[_ngcontent-%COMP%]{background-color:#28a745;cursor:not-allowed}.letra-incorrecta[_ngcontent-%COMP%]{background-color:#dc3545;cursor:not-allowed}select[_ngcontent-%COMP%]{padding:10px;font-size:1rem;margin-bottom:20px;border:1px solid #ced4da;border-radius:4px;outline:none;width:100%;background-color:#fff;color:#495057;transition:border-color .3s}select[_ngcontent-%COMP%]:focus{border-color:#007bff;box-shadow:0 0 5px #007bff80}@media (max-width: 600px){h1[_ngcontent-%COMP%]{font-size:4vw}h2[_ngcontent-%COMP%]{font-size:2.5vw}.letra-boton[_ngcontent-%COMP%]{width:25%}.letra[_ngcontent-%COMP%]{font-size:1.5rem}select[_ngcontent-%COMP%]{font-size:.6rem}}']})};function ut(n,t){if(n&1&&(a(0,"tr")(1,"td"),r(2),i(),a(3,"td"),r(4),i(),a(5,"td"),r(6),i(),a(7,"td"),r(8),i(),a(9,"td"),r(10),W(11,"date"),i()()),n&2){let e=t.$implicit,o=p();s(2),v(e.username),s(2),v(e.email),s(2),v(e.juego),s(2),v(e.puntos),s(2),v(xe(11,5,o.convertTimestampToDate(e.fecha),"dd/MM/yy HH:mm"))}}function gt(n,t){if(n&1&&(a(0,"tr")(1,"td"),r(2),i(),a(3,"td"),r(4),i()()),n&2){let e=t.$implicit;s(2),v(e.username),s(2),v(e.puntos)}}function ft(n,t){if(n&1&&(a(0,"div")(1,"h2"),r(2),i(),a(3,"table",4)(4,"thead")(5,"tr")(6,"th"),r(7,"Username"),i(),a(8,"th"),r(9,"Puntos"),i()()(),a(10,"tbody"),m(11,gt,5,2,"tr",5),i()()()),n&2){let e=p();s(2),b("Ranking: ",e.selectedGame,""),s(9),l("ngForOf",e.ranking)}}var G=class n{constructor(t){this.firestore=t;this.loadResultados()}resultados$=new oe;ranking=[];selectedGame="";ngOnInit(){}loadResultados(){let t=P(this.firestore,"resultados"),e=te(t,ee("fecha","desc"),ye(10));this.resultados$=Z(e,{idField:"id"})}showRanking(t){this.selectedGame=t;let e=P(this.firestore,"resultados"),o=te(e,ee("puntos","desc"));Z(o,{idField:"id"}).subscribe(c=>{this.ranking=c.filter(d=>d.juego===t).slice(0,3)})}convertTimestampToDate(t){return t&&t.seconds?new Date(t.seconds*1e3):new Date}static \u0275fac=function(e){return new(e||n)(f(y))};static \u0275cmp=_({type:n,selectors:[["app-resultados"]],decls:30,vars:4,consts:[[1,"resultados-container"],[1,"spacer"],[1,"button-container"],["mat-raised-button","","color","primary",3,"click"],[1,"resultados-table"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"h1"),r(2,"Resultados Juegos"),i(),u(3,"div",1),a(4,"div",2)(5,"button",3),g("click",function(){return o.showRanking("ahorcado")}),r(6,"Ranking Ahorcado"),i(),a(7,"button",3),g("click",function(){return o.showRanking("viborita")}),r(8,"Ranking Viborita"),i(),a(9,"button",3),g("click",function(){return o.showRanking("preguntados")}),r(10,"Ranking Preguntados"),i(),a(11,"button",3),g("click",function(){return o.showRanking("mayormenor")}),r(12,"Ranking Mayor Menor"),i()(),a(13,"table",4)(14,"thead")(15,"tr")(16,"th"),r(17,"Username"),i(),a(18,"th"),r(19,"Email"),i(),a(20,"th"),r(21,"Juego"),i(),a(22,"th"),r(23,"Puntos"),i(),a(24,"th"),r(25,"Fecha"),i()()(),a(26,"tbody"),m(27,ut,12,8,"tr",5),W(28,"async"),i()(),m(29,ft,12,2,"div",6),i()),e&2&&(s(27),l("ngForOf",fe(28,2,o.resultados$)),s(2),l("ngIf",o.ranking.length>0))},dependencies:[S,M,Ee,be,_e],styles:[".resultados-container[_ngcontent-%COMP%]{background-color:#2c3e50;padding:20px;border-radius:10px;box-shadow:0 4px 20px #00000080;max-width:800px;margin:40px auto}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{color:#ecf0f1;text-align:center;margin-bottom:20px}.button-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:20px}.resultados-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-family:Courier New,monospace;margin-top:20px}.resultados-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .resultados-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px;text-align:center;color:#ecf0f1;border-bottom:1px solid #34495e}.resultados-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#3498db;font-weight:700}.resultados-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ffffff1a}.resultados-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#ffffff0d}.resultados-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#ffffff05}@media (max-width: 600px){.button-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.resultados-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .resultados-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;font-size:2.4vw}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font-size:1.5em}}"]})};var xt=[{path:"preguntados",component:$},{path:"mayor-menor",component:H},{path:"viborita",component:U},{path:"ahorcado",component:q},{path:"resultados",component:G}],Q=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=z({imports:[X.forChild(xt),X]})};var Fe=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=z({providers:[A],imports:[Ce,Q,je,Me,Ae]})};export{Fe as JuegosModule};
