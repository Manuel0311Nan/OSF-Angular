import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_riiwk0r', 'template_tr9pk88', e.target as HTMLFormElement, '3-ThZuzxx5rij1COg')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El correo se ha enviado correctamente',
          showConfirmButton: false,
          timer: 1000
        })
      }, (error) => {
        console.log(error.text);
      });
  }
}
