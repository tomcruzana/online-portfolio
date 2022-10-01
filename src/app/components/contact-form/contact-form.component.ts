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
    const name: any = this.contactFormData.controls.name.value;
    const message: any = this.contactFormData.controls.message.value;
    const myEmail: string = 'tomcruzana@ymail.com';

    // open email w/ args
    window.open(`mailto:${myEmail}?subject=${name}&body=${message}`);
  }
}
