import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { AddmoneyPage } from '../addmoney/addmoney';
import { HomePage } from '../home/home';
import { ReportPage } from '../report/report';
/**
 * Generated class for the MoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-money',
  templateUrl: 'money.html',
})
export class MoneyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private alertCtrl: AlertController) {
  }

  add(){
    this.navCtrl.push(AddmoneyPage);
  }

  logout(){
    let alert = this.alertCtrl.create({
      title: 'ออกจากระบบ',
      subTitle: "คุณได้ออกจากระบบ",
      buttons: ['ok']
     
    }); 
    alert.present();
    this.app.getRootNav().setRoot(HomePage);
  }

  report(){
    this.navCtrl.push(ReportPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoneyPage');
  }

}
