import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CabinetPage } from './cabinet.page';
import { CompleteProfolioComponent } from '../../pofile_crds/complete-profolio/complete-profolio.component';


const routes: Routes = [
  {
    path: '',
    component: CabinetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [    CompleteProfolioComponent,
    CabinetPage]
})
export class CabinetPageModule {}
