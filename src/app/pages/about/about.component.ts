import { Photo } from './../../interfaces/Photo-Interface';
import { DataService } from './../../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { About } from 'src/app/interfaces/About-Interface';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  public about: About[] = [];
  public photo: Photo[] = [];

  aboutSubscription: Subscription;
  photoSubscription: Subscription;

  constructor(
    private aboutService: DataService,
    private photoService: DataService
  ) {}

  ngOnInit(): void {
    this.aboutSubscription = this.aboutService.getAbout()
      .subscribe(info => {
        this.about = info;
      });
    this.photoSubscription = this.photoService.getPhoto()
      .subscribe(photos => {
        this.photo = photos;
      });
  }
  ngOnDestroy(): void {
    this.aboutSubscription.unsubscribe();
    this.photoSubscription.unsubscribe();
  }
  }


