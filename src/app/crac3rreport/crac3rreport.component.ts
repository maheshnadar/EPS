import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-crac3rreport',
  templateUrl: './crac3rreport.component.html',
  styleUrls: ['./crac3rreport.component.scss']
})
export class Crac3rreportComponent implements OnInit {
  public uploadData:any;
  uploadForm: FormGroup;
  constructor(private atp: AmazingTimePickerService,private apiService:ApiService,private formBuilder: FormBuilder) {
    this.uploadData={};
   }
  ngOnInit() {


    this.uploadData.date = new Date();
    this.uploadData.time="12:00"
    this.uploadData.file;

    this.uploadForm = this.formBuilder.group({
      bank_code: ['', Validators.required],
      cra: ['', Validators.required],
      project: ['', Validators.required],
      date: [ this.uploadData.date],
      time: [  this.uploadData.time],
  });

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
  var hours_min=this.uploadData.time.split(":")
  this.uploadData.upload_datetime=new Date(this.uploadData.date);
  this.uploadData.upload_datetime.setHours(hours_min[0],hours_min[1])
  console.log("upload clicked",this.uploadData);
  const fileData = new FormData();
  fileData.append('file', this.uploadData.file,this.uploadData.file.name);
  fileData.append('bank_code', this.uploadData.bank_code);
  fileData.append('cra', this.uploadData.cra);
  fileData.append('file_type', 'crac3r_report');
  fileData.append('upload_datetime', this.uploadData.upload_datetime);
  console.log("upload clicked formdata",fileData);
  
  
  this.apiService.uploadFile("upload/",fileData).subscribe(event => {
      console.log(event); // handle event here
    });
  
  }

}
