import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class C1TickerService {

  constructor(
    private http: HttpClient
  ) { }

  getFssTicks(): void {

    let params = new HttpParams()
    params = params.append("logGroupName", environment.c1FileStorageSecCloudWatchLogGroupName)
    params = params.append("startTime", this.getBrowserState("session-start-timestamp"))
    params = params.append("endTime", Date.now().toString())
    params = params.append("logQuery", environment.c1FileStorageSecCloudWatchLogQuery)
    params = params.append("limit", "20")
    params = params.append("region", environment.c1DemoHostedAwsRegion)

    this.http.get<any>(environment.serviceUrl + "/ticker/fss", {params: params}).subscribe(data => {
      console.log("File Storage Security Ticks -");
      console.log(data);  
      // console.log(typeof(data));
      let err = 0;
      if (data) {   
        err = 0;
        this.setBrowserState("fssTicks", data)
        console.log("Request successful");
      } else {
        err = 1;
        console.log("Request failed");
      }
    })  
  }

  getAppSecTicks(): void {

    let params = new HttpParams()
    params = params.append("logGroupName", environment.c1AppSecCloudWatchLogGroupName)
    params = params.append("startTime", this.getBrowserState("session-start-timestamp"))
    params = params.append("endTime", Date.now().toString())
    params = params.append("logQuery", environment.c1AppSecCloudWatchLogQuery)
    params = params.append("limit", "20")
    params = params.append("region", environment.c1DemoHostedAwsRegion)

    this.http.get<any>(environment.serviceUrl + "/ticker/app-sec", {params: params}).subscribe(data => {
      console.log("Application Security Ticks -");
      console.dir(data);  
      // console.log(typeof(data));
      let err = 0;
      if (data) {   
        err = 0;
        console.log("Request successful");
      } else {
        err = 1;
        console.log("Request failed");
      }
    })  
  }

  getWorkloadSecTicks(): void {

    let params = new HttpParams()
    params = params.append("logGroupName", environment.c1WorkloadSecCloudWatchLogGroupName)
    params = params.append("startTime", this.getBrowserState("session-start-timestamp"))
    params = params.append("endTime", Date.now().toString())
    params = params.append("logQuery", environment.c1WorkloadSecCloudWatchLogQuery)
    params = params.append("limit", "20")
    params = params.append("region", environment.c1DemoHostedAwsRegion)

    this.http.get<any>(environment.serviceUrl + "/ticker/workload-sec", {params: params}).subscribe(data => {
      console.log("Workload Security Ticks -");
      console.dir(data);  
      // console.log(typeof(data));
      let err = 0;
      if (data) {   
        err = 0;
        console.log("Request successful");
      } else {
        err = 1;
        console.log("Request failed");
      }
    })  
  }

  getBrowserState(key: string): string {
    var i;
    for (i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === key) {
        return localStorage.getItem(key)
      }
    }
    return ""
  }

  setBrowserState(key, value): Boolean {
    localStorage.setItem(key, value);
    if (localStorage.getItem(key).length > 0) return true
    return false
  }

  deleteBrowserState(): void {
    localStorage.clear()
  }

  writeToAppConsole(message: string): void {
    let appConsoleDOMElement = <HTMLInputElement>document.getElementById("app-console");
    appConsoleDOMElement.innerText = message.toString();
  }

  // generateAppSecApiHeaders(): Object {
  //   let headers = {
  //     "Authorization": "ApiKey " + environment.c1AppSecApiKey,
  //     "api-version": "v1"
  //   }
  //   return headers
  // }

  // getAppSecEvents(): Object {
  //   let headers = this.generateAppSecApiHeaders()
  //   this.http.post<any>(environment.c1AppSecApiEndpointUrl + "/accounts/groups", null).subscribe(data => {
  //     console.log("AppSec Groups -");
  //     console.dir(data);  
  //     // console.log(typeof(data));
  //     let err = 0;
  //     if (data) {   
  //       err = 0;
  //       console.log("Request successful");
  //     } else {
  //       err = 1;
  //       console.log("Request failed");
  //     }
  //   })  
  //   return headers
  // } 

  // generateWorkloadSecApiHeaders(): Object {
  //   let headers = {
  //     "api-secret-key": environment.c1WorkloadSecApiKey,
  //     "api-version": "v1"
  //   }
  //   return headers
  // }

  // getWorkloadSecEvents(): Object {
  //   let headers = this.generateWorkloadSecApiHeaders()
  //   this.http.post<any>(environment.c1WorkloadSecApiEndpointUrl + "/systemsettings", null).subscribe(data => {
  //     console.log("WorkloadSec Groups -");
  //     console.dir(data);  
  //     // console.log(typeof(data));
  //     let err = 0;
  //     if (data) {   
  //       err = 0;
  //       console.log("Request successful");
  //     } else {
  //       err = 1;
  //       console.log("Request failed");
  //     }
  //   })  
  //   return headers
  // } 
}
