import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { AboutOSFComponent } from './about-osf/about-osf.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutOSFComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutOSFComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }