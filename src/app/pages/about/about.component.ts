import { Photo } from './../../interfaces/Photo-Interface';
import { DataService } from '../../core/services/data.service';
import { Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import { Subscription } from 'rxjs';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
  public photo: Photo[] = [];
  photoSubscription: Subscription
  isLoading = false;
  public page: number = 1;
  public photos: number = 0;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 100;

  constructor(
    private photoService: DataService,
  ) { }



  getProduct(): void {
    this.photoService.getPhoto().subscribe
      ((res: Photo[]) => {
        this.photo = res;
      });
  }
  ngOnInit(): void {
    this.getProduct();
  }

  next8Photos() {
    this.photos += 8;
    this.page += 1
  }
  prev8Photos() {
    this.photos -= 8;
    this.page -= 1

  }


  ngOnDestroy(): void {
    this.photoSubscription.unsubscribe();
  }
  }
