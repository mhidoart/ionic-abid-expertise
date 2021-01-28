import { Component, OnInit } from '@angular/core';
import { MailingService } from 'src/app/api/mailing.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  ngOnInit(): void {
  }
  private nom: string;
  private email: string = '';
  private msg: string;

  constructor(public mailer: MailingService) { }
  send() {
    // alert(this.nom + ' '+ this.email + ' '+ this.msg);
  this.mailer.send(this.nom, this.email, this.msg).then(
    res => {
      let tr = res as boolean;
      if(tr) {
        this.email ='';
        this.nom = '';
        this.msg = '';
      }
    }
  );

    /*
    .subscribe(
      res => console.log('HTTP response', res),
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
  );
  */
  }

}
