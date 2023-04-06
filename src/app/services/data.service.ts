import { Album } from './../interfaces/Album-Interface';
import { Photo } from './../interfaces/Photo-Interface';
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

  //!---------------------------Observable para la información del grupo
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

  //!---------------------------Observable para los conciertos
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
    //!----------------------------Observable para los conciertos
  getPhoto(): Observable<Photo[]>{
    if(this.cargando){
      return of();
    }
    this.cargando = true;

    return this.http.get<Photo[]>(`${this.baseUrl}/photos`)
    .pipe(
      map((resp) => resp)

      )
  }

      //!----------------------------Observable para los albums
  getAlbum(): Observable<Album[]>{
    if(this.cargando){
      return of();
    }
    this.cargando = true;

    return this.http.get<Album[]>(`${this.baseUrl}/albums`)
    .pipe(
      map((resp) => resp)

      )
  }



}

