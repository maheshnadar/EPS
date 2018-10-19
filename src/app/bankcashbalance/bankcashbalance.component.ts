import { Component, OnInit } from '@angular/core';

import { AmazingTimePickerService } from 'amazing-time-picker';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Page} from '../a_core/paging/page';

declare var jquery:any;   // not required
declare var $ :any;   // not required


@Component({
  selector: 'app-bankcashbalance',
  templateUrl: './bankcashbalance.component.html',
  styleUrls: ['./bankcashbalance.component.scss']
})
export class BankcashbalanceComponent implements OnInit {
  
alert:any;
page = new Page();
public uploadData:any;
cbruploadForm: FormGroup;
submitted = false;
temp = [];
datePipe;


  constructor(private atp: AmazingTimePickerService,private apiService:ApiService,private formBuilder: FormBuilder) {
    
    this.datePipe = new DatePipe('en-US');
    
    this.uploadData={};
    this.alert={};
    this.alert.isvisible=false;


    this.page.pageNumber = 0;
    // this.page.totalElements=2000;
    this.page.size = 20;
  
   }


  ngOnInit() {
    this.setPage({ offset: 0 });

    this.uploadData.date = new Date();
    this.uploadData.time="12:00"
    // this.uploadData.project;
    this.uploadData.file;


    this.cbruploadForm = this.formBuilder.group({
      bank_code: ['', Validators.required],
      cra: ['', Validators.required],
      project: ['', Validators.required],
      // date: ['',  Validators.required],
      // time: ['',  Validators.required],
      // file: ['',  Validators.required],
      date: [ this.uploadData.date],
      time: [  this.uploadData.time],
      // file: [''],
  });


  // this.updateAll();
  }

// convenience getter for easy access to form fields
get f() { return this.cbruploadForm.controls; }

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
  console.log("upload clicked----------",this.uploadData);
  
   this.submitted = true;

  // stop here if form is invalid
  if (this.uploadData.invalid) {
      return;
  }

// console.log("upload clicked------------",this.uploadData);
var hours_min=this.uploadData.time.split(":")
  this.uploadData.upload_datetime=new Date(this.uploadData.date);
  this.uploadData.upload_datetime.setHours(hours_min[0],hours_min[1])
  var date=this.datePipe.transform(this.uploadData.upload_datetime, 'yyyy-MM-dd HH:mm:ss');
const fileData = new FormData();
//uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
fileData.append('file', this.uploadData.file,this.uploadData.file.name);
fileData.append('bank_code', this.uploadData.bank_code);
fileData.append('project_id', this.uploadData.project);
// fileData.append('project_id', "MOF");
fileData.append('cra', this.uploadData.cra);
fileData.append('file_type', 'CBR');
fileData.append('upload_datetime', date);
console.log("upload clicked formdata",fileData);





this.apiService.uploadFile("upload/",fileData).subscribe(event => {
    console.log(event); // handle event here
    var response:any=event;
  //  if(response && response.type==undefined){
  //   // alert("uplode");
  //   this.alert.isvisible=true;
  //   this.alert.type="Uploaded";
  //   this.alert.text= "success desc -"+response.status+ " "+response.statusText;
  //   this.alert.class="success"

  //  }

   if(response && response.body){
     console.log("resonse",response.body)
    $('#m_modal_6').modal('hide')
    this.alert.isvisible=true;
    this.alert.type="Uploaded";
    this.updateAll();
    if(response.body.status_text=="Consolidation Successful"){
      this.alert.text=" "+ response.body.status_text;
      this.alert.class="success"
    }
    else{
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



// ----------view all data ----------------

rows:any=[{

    }]
  
   

 updateAll(){
  console.log("updarte called");
  this.setPage({ offset: 0 });
}

setPage(pageInfo){
  console.log("page clicked");
  this.page.pageNumber = pageInfo.offset;
  // this.serverResultsService.getResults(this.page).subscribe(pagedData => {
  //   this.page = pagedData.page;
  //   this.rows = pagedData.data;
  // });

  this.apiService.post("view/",{
    'page':this.page,
    'file_type':"CBR",
    "bank_code":"ALL",
    "filters" : {
      // "datafor_date_time":"",
      // "datafor_date_time": "2018-10-12T08:00:00Z",
    //  "atm_id":"APN0712A"
    }}).subscribe(data =>{
      console.log("-------get all");
   console.log(data); // handle event here
    //   this.page = pagedData.page;
    // this.temp = [...data];

    // push our inital complete list
    // this.rows = data;
   this.rows=data;
  })
}

  
updateFilter(event) {
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.temp.filter(function(d) {
    return d.name.toLowerCase().indexOf(val) !== -1 || !val;
  });

  // update the rows
  this.rows = temp;
  // Whenever the filter changes, always go back to the first page
  // this.table.offset = 0;
}
  // ---------end of  view all data ----------------------
    
  
}
