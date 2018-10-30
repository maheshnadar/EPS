import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { ApiService } from '../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DatePipe} from '@angular/common';

declare var jquery:any;   // not required
declare var $ :any;   // not required

@Component({
  selector: 'app-cashdispense',
  templateUrl: './cashdispense.component.html',
  styleUrls: ['./cashdispense.component.scss']
})
export class CashdispenseComponent implements OnInit {
datePipe;
alert:any;

  public uploadData:any;
  dispenseuploadForm: FormGroup;
  submitted = false;
  constructor(private atp: AmazingTimePickerService,private apiService:ApiService,private formBuilder: FormBuilder) { 
    this.uploadData={};
    this.alert={};
    this.alert.isvisible=false;
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit() {
    this.uploadData.date = new Date();
    this.uploadData.time="12:00"
    this.uploadData.file;

    this.dispenseuploadForm = this.formBuilder.group({
      bank_code: ['', Validators.required],
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
var date=this.datePipe.transform(this.uploadData.upload_datetime, 'yyyy-MM-dd HH:mm:ss');
const fileData = new FormData();
//uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
fileData.append('file', this.uploadData.file,this.uploadData.file.name);
fileData.append('bank_code', this.uploadData.bank_code);
// fileData.append('cra', this.uploadData.cra);
fileData.append('project_id', this.uploadData.project);
fileData.append('file_type', 'DISPENSE');
fileData.append('upload_datatime', date);
console.log("upload clicked formdata",fileData);
  
  
  this.apiService.uploadFile("upload/",fileData).subscribe(event => {
    var response:any=event;
    if(response && response.body){
      console.log("resonse",response.body)
     
    
    // this.updateAll();
     if(response.body.status_text=="Consolidation Successful"){
 
       this.alert.isvisible=true;
       this.alert.type="Upload";
         this.alert.class="danger"
         // this.alert.text=" "+ response.body.status_text;
      this.alert.text=" "+ response.body.status_text;
      this.alert.class="success"
      $('#m_modal_6').modal('hide')
 
     // this.updatePreview();
     // this.openPreviewModal();
     }
     else{
      this.alert.isvisible=true;
     this.alert.type="Upload";
       this.alert.class="danger"
       this.alert.text=" "+ response.body.status_text;
 
     }
   
    }
   },(error =>{
     // alert("Error - "+ error.status+ " "+error.statusText);
     $('#m_modal_6').modal('hide')
 
     this.alert.isvisible=true;
     this.alert.type="Error";
     this.alert.text="error desc- " +error.status+ " "+error.statusText;
     this.alert.class="danger"
 
 
 
   }));
  
  }




}
