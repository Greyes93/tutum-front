import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../config/app-constants';
import { Materia } from '../model/materia.model';
import { Observable } from 'rxjs';
import { OveralResponse } from '../model/overal-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(
    private httpClient: HttpClient,
    private appConstant: AppConstants
  ) { }


  public getAllMaterias(idProfesor: number): Observable<Materia[]>{
    return this.httpClient.get<Materia[]>(this.appConstant.URL_PROFESORES+"/"+idProfesor+"/materias");
  }

  public deleteMateria(idProfesor: number, idProfesorMateria: number) : Observable<OveralResponse> {
    return this.httpClient.delete<OveralResponse>(this.appConstant.URL_PROFESORES+"/"+idProfesor+"/materias?idProfesorMateria="+idProfesorMateria);
  }
}
