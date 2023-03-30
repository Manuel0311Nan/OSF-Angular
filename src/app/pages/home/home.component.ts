import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { About } from 'src/app/interfaces/About-Interface';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public about: About[] = [];

  aboutSubscription: Subscription;


  constructor(
    private aboutService: DataService,
  ) {}

  ngOnInit(): void {
    this.aboutSubscription = this.aboutService.getAbout()
      .subscribe((info: About[]) => {
        this.about = info;
      });

  }
  ngOnDestroy(): void {
    this.aboutSubscription.unsubscribe();

  }

}
