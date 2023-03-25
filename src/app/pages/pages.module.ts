import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShowsComponent } from './shows/shows.component';
import { SongsComponent } from './songs/songs.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentsModule } from "../components/components.module";



@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        ShowsComponent,
        SongsComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule
    ]
})
export class PagesModule { }
