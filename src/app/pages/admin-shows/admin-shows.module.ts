import { RouterModule } from '@angular/router';
import { AdminShowsComponent } from './admin-shows.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminShowsRoutingModule } from './admin-shows-routing.module';


@NgModule({
  declarations: [ AdminShowsComponent],
  imports: [
    CommonModule,
    AdminShowsRoutingModule,
    RouterModule
  ]
})
export class AdminShowsModule { }
