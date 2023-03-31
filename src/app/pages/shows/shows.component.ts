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
  public fechaActualString: Date = new Date();

  constructor(private showService: DataService) {

   }

  ngOnInit(): void {

    this.showService.getShows()
      .subscribe(infoShows => {
        this.show = infoShows;


        console.log(this.fechaActualString)
      })
    // this.showService.getShows().subscribe(
    //   (data: Shows[]) => {
    //     this.show = data;
    //     const fechaActual = new Date();
    //     this.show = this.show.filter((sho) => {
    //       const showDate = new Date(sho.date);
    //       return showDate.getTime() >= fechaActual.getTime();
    //     });
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }



}
