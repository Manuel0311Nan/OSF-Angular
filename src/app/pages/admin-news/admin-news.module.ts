import { AdminNewsComponent } from './admin-news.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminNewsRoutingModule } from './admin-news-routing.module';


@NgModule({
  declarations: [   AdminNewsComponent],
  imports: [
    CommonModule,
    AdminNewsRoutingModule
  ]
})
export class AdminNewsModule { }
