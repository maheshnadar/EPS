import { Component, OnInit ,TemplateRef } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';

import { AmazingTimePickerService } from 'amazing-time-picker';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Page} from '../a_core/paging/page';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


declare var jquery:any;   // not required
declare var $ :any;   // not required

@Component({
  selector: 'app-dailyloadingreport',
  templateUrl: './dailyloadingreport.component.html',
  styleUrls: ['./dailyloadingreport.component.scss']
})
export class DailyloadingreportComponent implements OnInit {
filetype="Daily_Loading _Report";

  @ViewChild('previewModal') previewModal: ElementRef;
  
  modalRef: BsModalRef;
alert:any;
page = new Page();
public uploadData:any;
uploadForm: FormGroup;
submitted = false;
temp = [];
datePipe;


  constructor(private atp: AmazingTimePickerService,private apiService:ApiService,private formBuilder: FormBuilder,private modalService: BsModalService) {
    
    this.datePipe = new DatePipe('en-US');
    
    this.uploadData={};
    this.alert={};
    this.alert.isvisible=false;


    this.page.pageNumber = 0;
    // this.page.totalElements=2000;
    this.page.size = 20;
    this.populateSelectColumn();
   }


  ngOnInit() {
    this.setPage({ offset: 0 });

    this.uploadData.date = new Date();
    this.uploadData.time="12:00"
    // this.uploadData.project;
    this.uploadData.file;


    this.uploadForm = this.formBuilder.group({
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
get f() { return this.uploadForm.controls; }

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
// fileData.append('bank_code', this.uploadData.bank_code);
fileData.append('bank_code', "ALL");

fileData.append('project_id', this.uploadData.project);
// fileData.append('project_id', "MOF");
// fileData.append('cra', this.uploadData.cra);
fileData.append('file_type', this.filetype);
fileData.append('upload_datatime', date);
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
    
   
   // this.updateAll();
    if(response.body.status_text=="Consolidation Successful"){

     // this.alert.text=" "+ response.body.status_text;
     // this.alert.class="success"

    this.updatePreview();
    this.openPreviewModal();
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



// ----------view all data ----------------

viewColumns:Object={};
// selectedViewColumns:any=['all'];
// viewColumnsOptions:any=['all','atm_id']
// selectViewColumn(key){
//   // this.viewColumns[key]= ! this.viewColumns[key];
//   // console.log( this.viewColumns);
//   console.log( this.selectedViewColumns,key);
// }


rows:any=[];
tempRows:any=[];
filtersForAllView:any={};

viewColumnAll:any=[
  {
    name:"ATM ID",
    prop:"atm_id"
  },
  {
    name:"Bank name",
    prop:"bank_name"
  },
  {
    name:"Project",
    prop:"project_id"
  },
  {
    name:"Bank Code",
    prop:"bank_name"
  },
  {
    name:"Date & Time",
    prop:"modified_on"
  },
  {
    name:"Balance Total",
    prop:"total_remaining_balance"
  },
  {
    name:"Denomination 100",
    prop:"remaining_balance_100"
  },
  {
    name:"Denomination 200",
    prop:"remaining_balance_200"
  },
  {
    name:"Denomination 500",
    prop:"remaining_balance_500"
  },
  {
    name:"Denomination 2000",
    prop:"remaining_balance_2000"
  }
]
viewColumn:any=(JSON.parse(JSON.stringify(this.viewColumnAll)));
selectedColumn:any=[];
columnChange:any=[];


populateSelectColumn(){
  this.viewColumnAll.filter( (col) => {
    this.selectedColumn.push(col.prop);
  })
}

columnChangefn(){
const isAll=this.selectedColumn.includes('all');

// if(isAll){
//   this.selectedColumn=['all']
this.viewColumn=this.viewColumnAll.filter( (col) => {
  
  return this.selectedColumn.includes(col.prop);
})
// }

console.log("col change",this.selectedColumn,this.viewColumn);

}









  viewSearch(event) {
      console.log("updateing");
        const val = event.target.value.toLowerCase();
      
        // filter our data
        const temp = this.tempRows.filter(function(d) {
        var search_atm_id=d.atm_id.toLowerCase().indexOf(val) !== -1;
        var search_bank_name=d.bank_name.toLowerCase().indexOf(val) !== -1;
        var search_project_id=d.project_id.toLowerCase().indexOf(val) !== -1;
      
      
        return search_atm_id || search_bank_name || search_project_id || !val ;
      
        //  var obj = {a: 1, b: 2};
      // for (var key in d) {
      //  if (d.hasOwnProperty(key)) {
      //   var val = d[key];
      //    console.log(val);
      //    console.log(key)
      //  return val+"".toLowerCase().indexOf(val) !== -1 || !val;
      //
      //  }
      //}
      
      
        });
      
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
      }
   

 updateAll(){
  console.log("updarte called");
  this.setPage({ offset: 0 });
  $('#modalfilter').modal('hide');

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
    "filters" : this.filtersForAllView
    // {
    //   // "datafor_date_time":"",
    //   // "datafor_date_time": "2018-10-12T08:00:00Z",
    // //  "atm_id":"APN0712A"
    // }
  }
    ).subscribe(data =>{
      console.log("-------get all");
   console.log(data); // handle event here
    //   this.page = pagedData.page;
    // this.temp = [...data];

    // push our inital complete list
  this.rows = data;
   this.tempRows=data;
  })
}

  

  // ---------end of  view all data ----------------------
    
  




  // --------preview modal ----------

previewRows:any=[];
tempPreviewRow:any=[];
previewFilter:any;
previewSearch(event) {
console.log("updateing");
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.tempPreviewRow.filter(function(d) {
  var searchacceptorname=d.acceptorname.toLowerCase().indexOf(val) !== -1;
  var searchterm_id=d.term_id.toLowerCase().indexOf(val) !== -1;
  var searchproject_id=d.project_id.toLowerCase().indexOf(val) !== -1;


  return searchacceptorname || searchterm_id || searchproject_id || !val ;

  //  var obj = {a: 1, b: 2};
// for (var key in d) {
//  if (d.hasOwnProperty(key)) {
//   var val = d[key];
//    console.log(val);
//    console.log(key)
//  return val+"".toLowerCase().indexOf(val) !== -1 || !val;
//
//  }
//}


  });

  // update the rows
  this.previewRows = temp;
  // Whenever the filter changes, always go back to the first page
  // this.table.offset = 0;
}
  

updatePreview(){
var hours_min=this.uploadData.time.split(":")
  this.uploadData.upload_datetime=new Date(this.uploadData.date);
  this.uploadData.upload_datetime.setHours(hours_min[0],hours_min[1])
  var date=this.datePipe.transform(this.uploadData.upload_datetime, 'yyyy-MM-dd HH:mm:ss');
    this.apiService.post("view/",{
      'page':this.page,
      'file_type':"CBR",
      "bank_code":this.uploadData.bank_code,
      "filters" : {
         "datafor_date_time":"2018-09-26 18:16:23",
       //  "datafor_date_time": date,
      
      }}).subscribe(data =>{
        console.log("-------get all");
     console.log(data); // handle event here
      //   this.page = pagedData.page;
      // this.temp = [...data];
  
      // push our inital complete list
      // this.rows = data;
      this.tempPreviewRow=data;
     this.previewRows=data;
    })
  }


  approvePreviewFn(){



  }


  openPreviewModal() {
  $('#m_modal_6').modal('hide');
    console.log(this.previewModal);
    this.modalRef = this.modalService.show(this.previewModal, Object.assign({}, { class: 'preview-modal modal-lg' }));
  }


  // ------- end of preview modal ----------


}
