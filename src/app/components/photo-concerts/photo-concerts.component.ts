import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Photo } from 'src/app/interfaces/Photo-Interface';
@Component({
  selector: 'app-photo-concerts',
  templateUrl: './photo-concerts.component.html',
  styleUrls: ['./photo-concerts.component.css']
})
export class PhotoConcertsComponent implements OnInit, AfterViewInit {
  @Input()
  photos: Photo[] = [];
  public mySwiper: Swiper;

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,

    });
  }
  ngOnInit(): void {
    console.log(this.photos)
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }
}
