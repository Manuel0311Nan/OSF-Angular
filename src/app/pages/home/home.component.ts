import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { About } from 'src/app/interfaces/About-Interface';
import { DataService } from 'src/app/core/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public about: About[] = [];

  aboutSubscription: Subscription;
  @ViewChild('miVideo') miVideo: any;

  constructor(
    private aboutService: DataService,
  ) {
  }
  ngAfterViewInit() {
    this.establecerVolumen();
  }

  ngOnInit(): void {
    this.aboutSubscription = this.aboutService.getAbout()
      .subscribe((info: About[]) => {
        this.about = info;
      });

  }
  ngOnDestroy(): void {
    this.aboutSubscription.unsubscribe();

  }

  establecerVolumen() {
    this.miVideo.nativeElement.volume = 0.2;
  }
}
