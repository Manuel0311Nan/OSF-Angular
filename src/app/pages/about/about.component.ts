import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/interfaces/About-Interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 public  about: About[] = [];

  constructor(
    private aboutService: DataService,
  ) {}

  ngOnInit(): void {

    this.aboutService.getAbout()
      .subscribe(info => {
        this.about = info;
      })
  }

}
