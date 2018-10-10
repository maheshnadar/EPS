import { Component, OnInit } from '@angular/core';

import { AmazingTimePickerService } from 'amazing-time-picker';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../apiservice.service';



@Component({
  selector: 'app-bankcashbalance',
  templateUrl: './bankcashbalance.component.html',
  styleUrls: ['./bankcashbalance.component.scss']
})
export class BankcashbalanceComponent implements OnInit {
public uploadData:any;
 

  constructor(private atp: AmazingTimePickerService,private apiService:ApiService) {
    this.uploadData={};
   }


  ngOnInit() {
    this.uploadData.date = new Date();
    this.uploadData.time="12:00"
  }

  openTimeSelector() {
    console.log("time picker opened")
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.uploadData.time = time;
    console.log("time picker closed")
        
    });
}


onFileChanged(event) {
  //const file = event.target.files[0]
  this.uploadData.file = event.target.files[0]
  console.log(event.target.files);
}


uploadDatafn(){
console.log("upload clicked",this.uploadData);
var hours_min=this.uploadData.time.split(":")
this.uploadData.upload_datetime=new Date(this.uploadData.date);
this.uploadData.upload_datetime.setHours(hours_min[0],hours_min[1])
console.log("upload clicked",this.uploadData);
const fileData = new FormData();
//uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
fileData.append('file', this.uploadData.file,this.uploadData.file.name);
fileData.append('bank_code', 'BOMH');
fileData.append('file_type', 'CBR');
fileData.append('upload_datetime', '2018-09-26 18:16:23');
console.log("upload clicked formdata",fileData);





this.apiService.uploadFile("upload/",fileData).subscribe(event => {
    console.log(event); // handle event here
  });

}
  
}
