import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  contactFormData: any;

  sendContactFormData(myForm: any) {
    this.contactFormData = myForm;
    Swal.fire({
      icon: 'success',
      title: 'Your message has been sent.',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
