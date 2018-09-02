import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-regis',
  templateUrl: 'regis.html',
})
export class RegisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  saveregis(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisPage');
  }

}
