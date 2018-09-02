import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
//import { SQLite } from '@ionic-native/sqlite';
//import { Toast } from '@ionic-native/toast';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisPage } from '../pages/regis/regis';
import { MoneyPage} from '../pages/money/money';
import { AddmoneyPage } from '../pages/addmoney/addmoney';
import { ReportPage } from '../pages/report/report';
import { AuthenServiceProvider } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisPage,
    MoneyPage,
    AddmoneyPage,
    ReportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisPage,
    MoneyPage,
    AddmoneyPage,
    ReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenServiceProvider,
    
  ]
})
export class AppModule {}
