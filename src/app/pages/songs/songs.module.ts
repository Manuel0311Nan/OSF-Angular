import { SharedModule } from './../../shared/shared.module';
import { SongsComponent } from './songs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [SongsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SongsRoutingModule,
    SharedModule
  ]
})
export class SongsModule { }
