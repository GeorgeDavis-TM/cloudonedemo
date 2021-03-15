import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username = new FormControl();
  password = new FormControl();

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log('Login init');
    let body = {      
      "username": this.username.value,
      "password": this.password.value
    }

    console.log(body)

    this.http.post<any>(environment.serviceUrl + "/login/login", body).subscribe(data => {
      console.log("Login -");
      console.dir(data);  
      let err = 0;
      if (data.length > 0) {   
        err = 0;
        console.log("Login successful");
      } else {
        err = 1;
        console.log("Login failed");
      }
    })  
  }
}
