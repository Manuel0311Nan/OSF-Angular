import { DataService } from '../../core/services/data.service';
import { Shows } from './../../interfaces/Show-Interface';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit{

  public show: Shows[] = [];
  public fechaActual: String;

  constructor(private showService: DataService) {

   }
  ngOnInit(): void {

    this.showService.getShows()
      .subscribe(infoShows => {
        this.show = infoShows;
        this.fechaActual = moment().format();
      })
  }



}
