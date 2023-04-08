import { AboutComponent } from './about.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
