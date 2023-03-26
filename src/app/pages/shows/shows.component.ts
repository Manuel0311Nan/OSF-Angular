import { DataService } from './../../services/data.service';
import { Shows } from './../../interfaces/Show-Interface';
import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import localePy from '@angular/common/locales/es-PY'

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit{

  public show: Shows[] = [];


  public getFechaActualString(): string {
    const fechaActual: Date = new Date();
    const anio: number = fechaActual.getFullYear();
    const mes: number = fechaActual.getMonth() + 1;
    const dia: number = fechaActual.getDate();
    const diaString = dia < 10 ? `0${dia}` : dia.toString();
    const mesString = mes < 10 ? `0${mes}` : mes.toString();
    return `${diaString}/${mesString}/${anio}`;
  }

  constructor(private showService: DataService) {

   }

  ngOnInit(): void {

    this.showService.getShows()
      .subscribe(infoShows => {
        this.show = infoShows;

      })

  }


}
