import { DateComparePipe } from './pipes/date-compare.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { PhotoConcertsComponent } from './components/photo-concerts/photo-concerts.component';
import { NewsComponent } from './components/news/news.component';
import { AboutOSFComponent } from './components/about-osf/about-osf.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AboutOSFComponent,
    NewsComponent,
    PhotoConcertsComponent,
    DateComparePipe,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutOSFComponent,
    NewsComponent,
    PhotoConcertsComponent,
    DateComparePipe,
    OrderByPipe
  ]
})
export class SharedModule { }
