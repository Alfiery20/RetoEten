import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  imports: [CommonModule],
  templateUrl: './resultado.html',
  styleUrl: './resultado.scss',
})
export class Resultado implements OnInit {
  puntaje: number = 0;
  correctas: number = 0;
  total: number = 10;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const state = history.state as { puntaje: number; correctas: number };
    this.puntaje = state?.puntaje ?? 0;
    this.correctas = state?.correctas ?? 0;
  }

  volverInicio(): void {
    this.router.navigate(['']);
  }
}
