import { DataService } from './../../services/data.service';
import { Shows } from './../../interfaces/Show-Interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit{

  public show: Shows[] = [];
  public fechaActualString: String = new Date().toLocaleDateString();


  constructor(private showService: DataService) {

   }

  ngOnInit(): void {

    this.showService.getShows()
      .subscribe(infoShows => {
        this.show = infoShows;
        this.fechaActualString = this.fechaActualString
        console.log(this.show)
        console.log(typeof(this.fechaActualString))
      })

  }


}
