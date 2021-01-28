import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser,private router: Router) {

    // let browser = this.iab.create('https://isthmaroc.com','_blank',{zoom:'no',location:'no'});
    // browser.show();
  }
  openUrl() {
    const browser = this.iab.create('http://mhidozrs.000webhostapp.com');

  }
  toContact() {
    this.router.navigate(['contact-us']);

  }

}
