import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/interfaces/About-Interface';

@Component({
  selector: 'app-about-osf',
  templateUrl: './about-osf.component.html',
  styleUrls: ['./about-osf.component.css']
})
export class AboutOSFComponent implements OnInit{

  @Input()
  about: About[] = [];

  constructor (){}

  ngOnInit(): void {

  }
}
