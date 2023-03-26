import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComparePipe } from './date-compare.pipe';



@NgModule({
  declarations: [
    DateComparePipe
  ],
  exports: [
    DateComparePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
