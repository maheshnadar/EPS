import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';
import {DatePipe} from '@angular/common';

declare var jquery:any;   // not required
declare var $ :any;   // not required
@Component({
  selector: 'app-vaultcash',
  templateUrl: './vaultcash.component.html',
  styleUrls: ['./vaultcash.component.scss']
})
export class VaultcashComponent implements OnInit {
  alert:any;
  public uploadData:any;
  uploadForm: FormGroup;
datePipe;

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
  var date=this.datePipe.transform(this.uploadData.upload_datetime, 'yyyy-MM-dd HH:mm:ss');

  const fileData = new FormData();
  fileData.append('file', this.uploadData.file,this.uploadData.file.name);
  fileData.append('bank_code', this.uploadData.bank_code);
  fileData.append('CRA', this.uploadData.cra);
  fileData.append('file_type', 'VCB');
fileData.append('project_id', this.uploadData.project);

  // fileData.append('data_for_date', this.uploadData.upload_datetime);
  fileData.append('data_for_date', date);

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
