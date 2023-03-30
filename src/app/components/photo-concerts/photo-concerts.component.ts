import {  Component, Input, OnInit } from '@angular/core';

import { Photo } from 'src/app/interfaces/Photo-Interface';


@Component({
  selector: 'app-photo-concerts',
  templateUrl: './photo-concerts.component.html',
  styleUrls: ['./photo-concerts.component.css']
})
export class PhotoConcertsComponent implements OnInit {
  @Input()
  photos: Photo[] = [];

  ngOnInit(): void {
  }

}
