import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegisPage } from '../regis/regis';
import { MoneyPage } from '../money/money';
//import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') password;
  
  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
    
  }
  GoRegis(){
    this.navCtrl.push(RegisPage);
  }

  login(){
    if(this.uname.value == "admin" && this.password.value == "admin"){
      let alert = this.alertCtrl.create({
        title: 'เข้าสู่ระบบ',
        subTitle: "ขอต้อนรับเข้าสู่ระบบ",
        buttons: ['ok']
       
      }); 
      alert.present();
      this.navCtrl.push(MoneyPage);
  }
    }
   
    


}






  

