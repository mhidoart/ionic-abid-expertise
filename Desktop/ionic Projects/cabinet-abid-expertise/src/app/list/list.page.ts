import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public servs = [
    {
      title: 'PÔLE EXPERTISE COMPTABLE',
      icon: 'calculator',
      note: 'pole-expertise-comptable'
    },
    {
      title: 'PÔLE FISCALITÉ',
      icon: 'finger-print',
      note: ''
    },
    {
      title: 'PÔLE JURIDIQUE',
      icon: 'bookmarks',
      note: ''
    },
    {
      title: 'Pôle Audit',
      icon: 'podium',
      note: ''
    },
    {
      title: 'Pôle Conseils et stratégies',
      icon: 'clipboard',
      note: ''
    },
    {
      title: 'PÔLE SOCIAL & RH',
      icon: 'contacts',
      note: ''
    },
    {
      title: 'PÔLE INFORMATIQUE',
      icon: 'logo-buffer',
      note: ''
    },
    {
      title: 'ÉTUDE DE MARCHÉ',
      icon: 'calculator',
      note: ''
    },
    {
      title: 'AUTRES PRESTATIONS',
      icon: 'calculator',
      note: ''
    }
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public router: Router) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    
  }
  goToPage(chemin: string) {
    this.router.navigate(['pole-expertise-comptable']);
  }
  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
