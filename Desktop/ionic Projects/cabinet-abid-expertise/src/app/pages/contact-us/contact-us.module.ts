import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactUsPage } from './contact-us.page';
import { MaterialModule } from '../../material.module';
import { MailingService } from 'src/app/api/mailing.service';


const routes: Routes = [
  {
    path: '',
    component: ContactUsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    MailingService
  ],
  declarations: [ContactUsPage]
})
export class ContactUsPageModule {}
