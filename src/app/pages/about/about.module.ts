import { LoginComponent } from './../login/login.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AboutComponent } from './about.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule,
    AboutRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule
  ]
})
export class AboutModule { }
