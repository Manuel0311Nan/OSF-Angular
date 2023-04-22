import { ModalServiceService } from './../../services/modal-service.service';
import { DataService } from 'src/app/core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from 'src/app/interfaces/Photo-Interface';

@Component({
  selector: 'app-photo-concerts',
  templateUrl: './photo-concerts.component.html',
  styleUrls: ['./photo-concerts.component.css']
})
export class PhotoConcertsComponent implements OnInit {

  public photo: Photo[] = [];

  constructor(private modalService: ModalServiceService
  ) {
  }
    ngOnInit(): void {

    }
  closeModal() {
  this.modalService.$modal.emit(false)
}
}
