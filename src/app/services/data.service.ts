import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About } from '../interfaces/About-Interface';
import {Observable, of,  map, catchError} from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl: string = 'https://osf-back.vercel.app/about';
  public cargando: boolean = false;

  constructor( private http: HttpClient) {}


  getAbout(): Observable<About[]>{
  if(this.cargando){
    return of();
  }
  this.cargando = true;

  return this.http.get<About[]>(`${this.baseUrl}`)
  .pipe(
    map((resp) => resp)
  )
  }


}

