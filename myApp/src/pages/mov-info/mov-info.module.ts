import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovInfoPage } from './mov-info';

@NgModule({
  declarations: [
    MovInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MovInfoPage),
  ],
})
export class MovInfoPageModule {}
