import { AdminNewsComponent } from './../admin-news/admin-news.component';
import { AdminPhotoComponent } from './../admin-photo/admin-photo.component';
import { AdminShowsComponent } from './../admin-shows/admin-shows.component';
import { AdministradorComponent } from './administrador.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';


@NgModule({
  declarations: [
    AdministradorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
