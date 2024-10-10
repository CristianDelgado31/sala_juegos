import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

interface Encuesta {
  nombre: string;
  apellido: string;
  edad: number;
  telefono: string;
  respuestas: {
    radio: string;
    checkbox: string[];
    select: string;
  };
}

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  encuestaForm!: FormGroup;
  preguntas = [
    {
      question: '¿Cuál es tu color favorito?',
      type: 'radio',
      options: ['Rojo', 'Verde', 'Azul', 'Amarillo']
    },
    {
      question: '¿Qué deportes practicas?',
      type: 'checkbox',
      options: ['Fútbol', 'Basketball', 'Natación', 'Ciclismo']
    },
    {
      question: '¿Cuál es tu fruta favorita?',
      type: 'select',
      options: ['Manzana', 'Banana', 'Naranja', 'Uva']
    }
  ];

  constructor(private fb: FormBuilder, private firestore: Firestore, private router: Router) { }

  ngOnInit(): void {
    this.encuestaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{1,10}$/)]],
      respuestas: this.fb.group({
        radio: ['', Validators.required], // Control para radio
        checkbox: [[], Validators.required], // Control para checkbox
        select: ['', Validators.required] // Control para select
      })
    });
  }
  
  

  enviarEncuesta() {
    if (this.encuestaForm.valid) {
      console.log('Formulario válido');
      const encuestaData = { ...this.encuestaForm.value };
      const resultadosRef = collection(this.firestore, 'encuestas');

      addDoc(resultadosRef, {
        ...encuestaData,
        fecha: new Date()
      }).then(() => {
        console.log('Encuesta guardada exitosamente');
        this.encuestaForm.reset();
        this.router.navigate(['/home']);
      }).catch(err => {
        console.error('Error al guardar la encuesta: ', err);
      });
    } else {
      console.log('Formulario inválido');
    }
  }

  onCheckboxChange(event: any) {
    const checkboxArray: any = this.encuestaForm.get('respuestas.checkbox')?.value || [];
    if (event.target.checked) {
      checkboxArray.push(event.target.value);
    } else {
      const index = checkboxArray.indexOf(event.target.value);
      if (index >= 0) {
        checkboxArray.splice(index, 1);
      }
    }
    this.encuestaForm.get('respuestas.checkbox')?.setValue(checkboxArray);
  }
}
