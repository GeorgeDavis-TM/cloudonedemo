import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private http: HttpClient
  ) { }

  sendCommand(cmd) {
    console.log(cmd);

    let params = {      
      "command": cmd
    }

    this.http.post<any>(environment.serviceUrl + "/cmd", params).subscribe(data => {
      console.log("Login -");
      console.dir(data);  
      let err = 0;
      if (data.length > 0) {   
        err = 0;
      } else {
        err = 1;
      }
      // if (err == 1) {
      //   this.errorMessage = "Login Invalid."
      //   this.errorMessageText = " Try again. Contact Team for more info";
      // }
    })    
  }
}
