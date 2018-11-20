import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mov-info',
  templateUrl: 'mov-info.html',
})
export class MovInfoPage {
  selectedMov:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedMov = navParams.get('post');
    console.log(this.selectedMov);
  }



}
