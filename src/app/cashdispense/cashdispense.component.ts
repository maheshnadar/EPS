import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { ApiService } from '../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cashdispense',
  templateUrl: './cashdispense.component.html',
  styleUrls: ['./cashdispense.component.scss']
})
export class CashdispenseComponent implements OnInit {
  public uploadData:any;
  dispenseuploadForm: FormGroup;
  submitted = false;
  constructor(private atp: AmazingTimePickerService,private apiService:ApiService,private formBuilder: FormBuilder) { 
    this.uploadData={};
  }

  ngOnInit() {
    this.uploadData.date = new Date();
    this.uploadData.time="12:00"
    this.uploadData.file;

    this.dispenseuploadForm = this.formBuilder.group({
      bank_code: ['', Validators.required],
      cra: ['', Validators.required],
      project: ['', Validators.required],
      
      // date: ['',  Validators.required],
      // time: ['',  Validators.required],
      // file: ['',  Validators.required],


        // project: [''],
      date: [ this.uploadData.date],
      time: [  this.uploadData.time],
      // file: [''],
  });
  }


  // convenience getter for easy access to form fields
get f() { return this.dispenseuploadForm.controls; }

  openTimeSelector() {
    console.log("time picker opened");
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


uploadDatafn(uploadData){
  console.log("upload clicked",this.uploadData);
var hours_min=this.uploadData.time.split(":")
this.uploadData.upload_datetime=new Date(this.uploadData.date);
this.uploadData.upload_datetime.setHours(hours_min[0],hours_min[1])
console.log("upload clicked",this.uploadData);
const fileData = new FormData();
//uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
fileData.append('file', this.uploadData.file,this.uploadData.file.name);
fileData.append('bank_code', this.uploadData.bank_code);
fileData.append('cra', this.uploadData.cra);
fileData.append('file_type', 'cash_dispense');
fileData.append('upload_datetime', this.uploadData.upload_datetime);
console.log("upload clicked formdata",fileData);
  
  
  this.apiService.uploadFile("upload/",fileData).subscribe(event => {
      console.log(event); // handle event here
    });
  
  }




}
