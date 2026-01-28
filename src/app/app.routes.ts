import { Routes } from '@angular/router';
import { Inicio } from './quiz/inicio/inicio';
import { Preguntas } from './quiz/preguntas/preguntas';
import { Resultado } from './quiz/resultado/resultado';

export const routes: Routes = [
    {
        path: '',
        component: Inicio
    },
    {
        path: 'quiz',
        component: Preguntas
    },
    {
        path: 'resultado',
        component: Resultado
    }
];
