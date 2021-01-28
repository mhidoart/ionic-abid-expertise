import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PoleExpertiseComptablePage } from './pole-expertise-comptable.page';
import { MaterialModule } from '../../material.module';


const routes: Routes = [
  {
    path: '',
    component: PoleExpertiseComptablePage
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
  declarations: [PoleExpertiseComptablePage]
})
export class PoleExpertiseComptablePageModule {}
