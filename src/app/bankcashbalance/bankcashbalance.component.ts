import { Component, OnInit } from '@angular/core';

import { AmazingTimePickerService } from 'amazing-time-picker';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-bankcashbalance',
  templateUrl: './bankcashbalance.component.html',
  styleUrls: ['./bankcashbalance.component.scss']
})
export class BankcashbalanceComponent implements OnInit {
public uploadData:any;


  constructor(private atp: AmazingTimePickerService,private http: HttpClient) {
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

//const uploadData = new FormData();
//uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


this.http.post('my-backend.com/file-upload', this.uploadData, {
  reportProgress: true,
  observe: 'events'
})
  .subscribe(event => {
    console.log(event); // handle event here
  });

}
  
}
