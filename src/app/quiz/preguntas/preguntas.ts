import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { constants, Pregunta } from '../../core/preguntas';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  imports: [CommonModule],
  templateUrl: './preguntas.html',
  styleUrl: './preguntas.scss',
})
export class Preguntas implements OnInit {

  posicion = 0;
  puntaje = 0;
  correctas = 0;

  preguntas: Pregunta[] = constants.PreguntaDataBase;
  respuestaSeleccionada: number | null = null;
  esCorrecta: boolean | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  seleccionarRespuesta(index: number): void {
    this.respuestaSeleccionada = index;
    const imgCorrecta = "public/RespuestaCorrecta.png";
    const imgIncorrecta = "public/RespuestaErronea.png";
    var imagenMostrar = "";
    this.esCorrecta = this.preguntas[this.posicion].alternativa[index].esCorrecta;

    if (this.esCorrecta) {
      this.puntaje += 10;
      this.correctas += 1;
      imagenMostrar = imgCorrecta;
    } else {
      this.puntaje -= 5;
      imagenMostrar = imgIncorrecta;
    }
  }

  siguientePregunta(): void {
    if (this.posicion < this.preguntas.length - 1) {
      this.posicion++;
      this.respuestaSeleccionada = null;
      this.esCorrecta = null;
    } else {
      this.router.navigate(['/resultado'], {
        state: { puntaje: this.puntaje, correctas: this.correctas }
      });
    }
  }
}
