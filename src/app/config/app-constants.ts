import { Injectable } from '@angular/core';

@Injectable()
export class AppConstants {
    readonly URL_SERVER = 'http://localhost:8090';
    readonly URL_ALUMNOS = this.URL_SERVER + '/alumnos';
    readonly URL_MATERIAS = this.URL_SERVER + '/materias';
    readonly URL_CALIFICAICONES = this.URL_SERVER + '/calificaciones';
    readonly URL_PROFESORES = this.URL_SERVER + '/profesor'
}