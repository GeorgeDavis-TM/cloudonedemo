import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormPageComponent implements OnInit {

  fileContents: string = '';

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
  }

  updateCustomFileLabel(): void {        
    let fileName = (<HTMLInputElement>document.getElementById("file-upload")).files;
    if (fileName && fileName.length > 0) {    
      document.getElementsByClassName('custom-file-label')[0].innerHTML = "Uploading " + fileName[0].name + "...";
    }     
    console.log(typeof(fileName));
    this.onChange(fileName) 
  }

  uploadFile(): void {
    console.log('Upload init');

    let file = (<HTMLInputElement>document.getElementById("file-upload")).files;
    // console.log(file);
    if (file && file.length > 0) {
      console.log(file[0].name)

      // let fileReader = new FileReader;
      // let fileContents = ""
      // fileReader.onload = function(event)
      // {
      //     // NOTE: event.target point to FileReader
      //     return event.target.result.toString();
      // };
      // fileReader.readAsText(file[0]);
      // console.log(fileContents); 
      // console.log(typeof(fileContents)); 

      // var fileContents = "";
      // const fileReader = new FileReader();
      // fileReader.onload = () => storeResults(fileReader.result);

      // function storeResults(result) {
      //   fileContents = result;
      // }
      // fileReader.readAsText(file[0]);
      // console.log(fileContents)
      
      let body = {
        "name": file[0].name,
        "contents": this.fileContents,
        "bucketName": environment.c1FileStorageSecS3BucketName,
        "region": environment.c1DemoHostedAwsRegion
      }

      this.http.post<any>(environment.serviceUrl + "/upload", body).subscribe(data => {
        console.log("Upload -");
        console.dir(data);  
        // console.log(typeof(data));
        let err = 0;
        if (data) {   
          err = 0;
          console.log("Upload successful");
        } else {
          err = 1;
          console.log("Upload failed");
        }
      })  
    }
  }

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContents = fileReader.result.toString();
    }
    fileReader.readAsText(file);
  }
}
