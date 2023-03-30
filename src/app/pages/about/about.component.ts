import { Photo } from './../../interfaces/Photo-Interface';
import { DataService } from './../../services/data.service';
import { Component, OnInit, OnDestroy , HostListener} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {


  public photo: Photo[] = [];
  photoSubscription: Subscription;


  @HostListener('window:scroll', ['event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)

    if (pos > max) {
      if (this.photoService.cargando) { return; }
      this.photoService.getPhoto().subscribe(photos => {
        this.photo.push(...photos);

      })
    }
    }
  constructor(
    private photoService: DataService
  ) {}

  ngOnInit(): void {

    this.photoSubscription = this.photoService.getPhoto()
      .subscribe(photos => {
        this.photo = photos;
      });
  }
  ngOnDestroy(): void {
    this.photoSubscription.unsubscribe();
  }
  }


