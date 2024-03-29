import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private http: HttpClient,
    private router: Router
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

    this.http.post<any>(environment.serviceUrl + "/login", body).subscribe(data => {
      console.log("Login -");
      console.dir(data);  
      // console.log(typeof(data));
      let err = 0;
      if (data) {   
        err = 0;
        console.log("Login successful");
        this.router.navigate(['/upload']);
      } else {
        err = 1;
        console.log("Login failed");
      }
    })  
  }
}
