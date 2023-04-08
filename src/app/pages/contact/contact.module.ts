import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
