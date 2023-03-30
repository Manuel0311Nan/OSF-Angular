import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { AboutOSFComponent } from './about-osf/about-osf.component';
import { PhotoConcertsComponent } from './photo-concerts/photo-concerts.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutOSFComponent,
    PhotoConcertsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutOSFComponent,
    PhotoConcertsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }
