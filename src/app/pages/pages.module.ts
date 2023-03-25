import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShowsComponent } from './shows/shows.component';
import { SongsComponent } from './songs/songs.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ShowsComponent,
    SongsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
