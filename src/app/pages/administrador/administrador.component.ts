import { Shows } from './../../interfaces/Show-Interface';
import { About } from 'src/app/interfaces/About-Interface';
import { DataService } from 'src/app/core/services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {

  constructor(private adminService: DataService) {

  }
}
