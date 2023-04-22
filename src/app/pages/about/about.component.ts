import { ModalServiceService } from './../../shared/services/modal-service.service';
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

  public page: number = 1;
  public photos: number = 0;

//TODO Loading image
isLoading = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 100;

//TODO variable modal
  public modalSwitch: boolean;


  constructor(
    private photoService: DataService,
    private modalService: ModalServiceService
  ) { }

  openModal() {
    this.modalService.$modal.subscribe((valor) => { this.modalSwitch = valor })

    this.modalSwitch = true
  }

  getProduct(): void {
    this.isLoading = true
    this.photoService.getPhoto().subscribe
      ((res: Photo[]) => {
        this.photo = res;

      });
      this.isLoading = false;
  }
  ngOnInit(): void {
    this.openModal();
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
