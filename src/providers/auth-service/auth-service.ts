import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AlertMessage} from '../../models/msg';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenServiceProvider {

  apiUrl : string = "";
  constructor(public http: HttpClient) {
    console.log('Hello AuthenServiceProvider Provider');
  }

  register(fullName:string,email:string,password:string): Observable<AlertMessage>{
    const header = {'Content-Type':'application/json'};
    let data = {
      'cmd' : 'insert',
      'fullname' : fullName,
      'email': email,
      'password' : password

    };
    return this.http.post<AlertMessage>(this.apiUrl,data, { headers:header });
  }

}
