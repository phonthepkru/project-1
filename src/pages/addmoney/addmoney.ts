import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneyPage } from '../money/money';

/**
 * Generated class for the AddmoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmoney',
  templateUrl: 'addmoney.html',
})
export class AddmoneyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  save(){
    this.navCtrl.push(MoneyPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmoneyPage');
  }

}
