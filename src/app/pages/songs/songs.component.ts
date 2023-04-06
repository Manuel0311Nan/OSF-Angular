import { DataService } from 'src/app/services/data.service';
import { Album } from './../../interfaces/Album-Interface';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  public albums: Album[] = [];

  constructor(private albumService: DataService
  ) {}

ngOnInit(): void {
  this.albumService.getAlbum()
  .subscribe(infoAlbum => {
    this.albums = infoAlbum;


  })
}
}


