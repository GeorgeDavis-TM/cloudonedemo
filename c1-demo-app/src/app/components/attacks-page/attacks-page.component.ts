import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-attacks-page',
  templateUrl: './attacks-page.component.html',
  styleUrls: ['./attacks-page.component.css']
})
export class AttacksPageComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  }

  remoteCmdExec() {

    let body = {      
      "command": "cat /home/ec2-user/cloudonedemo/c1-demo-app/trend_app_protect.json"
    }

    this.http.post<any>(environment.serviceUrl + "/cmd/run", body).subscribe(data => {
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

  workloadAttackExec() {
    let body = {
      "command": "/usr/bin/python3 /home/ec2-user/cloudOneWorkloadSecurityDemo/cloud_one_workload_security_demo.py"
    }

    this.http.post<any>(environment.serviceUrl + "/cmd/run", body).subscribe(data => {
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

  conformityCfnExec() {
    let body = {      
      "command": "aws cloudformation create-stack --stack-name cloudonedemo-teststack --region us-east-2 --template-body file:///home/ec2-user/cloudonedemo/c1-demo-app/src/assets/scripts/misconfigured-cloudformation.json --parameters ParameterKey=VpcId,ParameterValue=vpc-67cf400e ParameterKey=SubnetId,ParameterValue=subnet-c1dc41a8"
    }

    this.http.post<any>(environment.serviceUrl + "/cmd/run", body).subscribe(data => {
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
