import { ShowsComponent } from './shows.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ShowsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShowsRoutingModule,
    SharedModule
  ]
})
export class ShowsModule { }
