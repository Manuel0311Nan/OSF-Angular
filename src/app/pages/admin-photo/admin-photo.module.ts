import { AdminPhotoComponent } from './admin-photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPhotoRoutingModule } from './admin-photo-routing.module';


@NgModule({
  declarations: [  AdminPhotoComponent],
  imports: [
    CommonModule,
    AdminPhotoRoutingModule
  ]
})
export class AdminPhotoModule { }
