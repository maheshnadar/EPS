import { Component, OnInit } from '@angular/core';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { JsonPipe } from '@angular/common';
import { stringify } from 'querystring';

import { HttpClient } from '@angular/common/http';

 const URL = 'http://localhost:3000/api/upload';



@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  selectedFile: File;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});


  constructor(private http: HttpClient) {

   }

  ngOnInit() {

    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; alert('File  :'+JSON.stringify(file));};
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => { 
    //      console.log('ImageUpload:uploaded:', item, status, response);
    //      alert('File uploaded successfully');
    //  };
  }

  onFileChanged(event) {
    //const file = event.target.files[0]
    this.selectedFile = event.target.files[0]
    console.log(event.target.files);
  }

  onUpload() {
    // upload code goes here
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


    this.http.post('my-backend.com/file-upload', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }

}
