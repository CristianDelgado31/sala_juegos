import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Asegúrate de importar esto
import { MatRadioModule } from '@angular/material/radio';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection, Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent  implements OnInit{
  nombre: string = '';
  apellido: string = '';
  edad: number | null = null;
  telefono: string = '';
  videojuegoFavorito: string = '';
  plataformaPC: boolean = false;
  plataformaConsola: boolean = false;
  plataformaMovil: boolean = false;
  tipoVideojuego: string = '';

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private firestore: Firestore) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{1,10}$/)]],
      videojuegoFavorito: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      plataformaPC: [false],
      plataformaConsola: [false],
      plataformaMovil: [false],
      tipoVideojuego: ['', Validators.required],
    }, { 
      validators: [this.radioButtonValidator, this.checkboxValidator] 
    });
  }

  checkboxValidator(formGroup: AbstractControl): ValidationErrors | null {
    const { plataformaPC, plataformaConsola, plataformaMovil } = formGroup.value; 
    const isAnyPlatformSelected = plataformaPC || plataformaConsola || plataformaMovil;
    const errorMessage = { messageCheckbox: 'Selecciona al menos una plataforma' };
  
    // Si alguna plataforma está seleccionada, no hay error
    if (isAnyPlatformSelected) {
      formGroup.get('plataformaPC')?.setErrors(null);
      formGroup.get('plataformaConsola')?.setErrors(null);
      formGroup.get('plataformaMovil')?.setErrors(null);
      return null;
    } else {
      // Si ninguna plataforma está seleccionada, establecer el error
      formGroup.get('plataformaPC')?.setErrors(errorMessage);
      formGroup.get('plataformaConsola')?.setErrors(errorMessage);
      formGroup.get('plataformaMovil')?.setErrors(errorMessage);
      return errorMessage;
    }
  }
  

  radioButtonValidator(formGroup: AbstractControl): ValidationErrors | null {
    const tipoVideojuego = formGroup.get('tipoVideojuego')?.value;
    const errorMessage = { messageRadioButton: 'Selecciona al menos un tipo de videojuego' };
  
    // Si no hay opción seleccionada, se establece el error
    if (!tipoVideojuego) {
      formGroup.get('tipoVideojuego')?.setErrors(errorMessage);
      return errorMessage;
    } else {
      formGroup.get('tipoVideojuego')?.setErrors(null);
      return null;
    }
  }
  
  
  onSubmit() {
    if(this.form.valid) {
      console.log('Formulario válido');
      // console.log(this.form.value);
      const encuestaData = this.form.value;
      const resultadosRef = collection(this.firestore, 'encuestas');
      const user = JSON.parse(localStorage.getItem('user')!);
      const username = user.email.split('@')[0];

      addDoc(resultadosRef, {
        ...encuestaData,
        fecha: Timestamp.now(),
        email: user.email,
        username: username
      }).then(() => {
        console.log('Encuesta guardada');
        this.form.reset();
        this.router.navigate(['/home']);
      }).catch((error) => {
        console.error('Error al guardar la encuesta', error);
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
