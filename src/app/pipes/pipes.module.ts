import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComparePipe } from './date-compare.pipe';
import { OrderByPipe } from './order-by.pipe';



@NgModule({
  declarations: [
    DateComparePipe,
    OrderByPipe
  ],
  exports: [
    DateComparePipe,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
