import { Shows } from './../interfaces/Show-Interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About } from '../interfaces/About-Interface';
import {Observable, of,  map, catchError} from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl: string = 'https://osf-back.vercel.app';
  public cargando: boolean = false;

  constructor( private http: HttpClient) {}


  getAbout(): Observable<About[]>{
  if(this.cargando){
    return of();
  }
  this.cargando = true;

  return this.http.get<About[]>(`${this.baseUrl}/about`)
  .pipe(
    map((resp) => resp)
    )
  }
  getShows(): Observable<Shows[]>{
    if(this.cargando){
      return of();
    }
    this.cargando = true;

    return this.http.get<Shows[]>(`${this.baseUrl}/shows`)
    .pipe(
      map((resp) => resp)
      )
    }


}

