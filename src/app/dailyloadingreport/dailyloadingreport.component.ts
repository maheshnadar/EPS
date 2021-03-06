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
import { ColumnConfig } from '../shared/columnConfig';


declare var jquery:any;   // not required
declare var $ :any;   // not required

@Component({
  selector: 'app-dailyloadingreport',
  templateUrl: './dailyloadingreport.component.html',
  styleUrls: ['./dailyloadingreport.component.scss']
})
export class DailyloadingreportComponent implements OnInit {


@ViewChild('previewModal') previewModal: ElementRef;

fileType="DLR"
  modalRef: BsModalRef;
alert:any;
page = new Page();
previewPage = new Page();

public uploadData:any;
uploadForm: FormGroup;
submitted = false;
temp = [];
datePipe;
dropdownValue:any;
filterDropDownValue:any;
previewColList:any;
public colList : ColumnConfig;

 
constructor(private atp: AmazingTimePickerService,private apiService:ApiService,private formBuilder: FormBuilder,private modalService: BsModalService, private columnConfig : ColumnConfig) {
  this.datePipe = new DatePipe('en-US');
  this.uploadData={};
  this.alert={};
  this.alert.isvisible=false;
  this.page.pageNumber = 0;
  this.page.size = 20;

  this.previewPage.pageNumber=0;
  this.previewPage.size=20
  this.dropdownValue={}
  this.filterDropDownValue={}
 }


ngOnInit() {
  this.uploadData.date = new Date();
  this.uploadData.time="12:00"
  this.uploadData.file;
  this.uploadForm = this.formBuilder.group({  
    cra: ['', Validators.required],
    date: [ this.uploadData.date],
    time: [  this.uploadData.time],
});


  this.updateViewAll();
  this.populateSelectColumn();
this.populateDropDown();
}











// ----------------------- upload file ------------------------------------

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
this.uploadData.file = event.target.files[0];
}


uploadDatafn(){
// stop here if form is invalid
if (this.uploadData.invalid) {
return;
}
console.log("upload clicked----------",this.uploadData);
this.previewColList = this.columnConfig.columnConfig.filter(x => x.table_name == "Daily_Loading_Report");
 this.submitted = true;



// console.log("upload clicked------------",this.uploadData);
var hours_min=this.uploadData.time.split(":")
this.uploadData.upload_datetime=new Date(this.uploadData.date);
this.uploadData.upload_datetime.setHours(hours_min[0],hours_min[1])
var date=this.datePipe.transform(this.uploadData.upload_datetime, 'yyyy-MM-dd HH:mm:ss');
let fileData = new FormData();
//uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
fileData.append('file', this.uploadData.file,this.uploadData.file.name);
fileData.append('bank_code', "ALL");
// fileData.append('project_id', this.uploadData.project.project_id);
fileData.append('project_id', "MOF");
fileData.append('cra', this.uploadData.cra);
fileData.append('file_type', "Daily_Loading_Report");
fileData.append('upload_datatime', date);
console.log("upload clicked formdata",fileData);
this.apiService.uploadFile("upload/",fileData).subscribe(event => {
  console.log(event); // handle event here
  var response:any=event;
 if(response && response.body){
   console.log("resonse",response.body)
  if(response.body.status_text=="Data Validation Successful" || response.body.status_text=="Partial Valid File"){
    this.alert.isvisible=true;
    this.alert.type="Upload";
    this.alert.class="danger"
   this.alert.text=" "+ response.body.status_text;
   this.alert.class="success"
   $('#m_modal_6').modal('hide')
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
  // this.alert.text="error desc- " +error.status+ " "+error.statusText;
  this.alert.text="Level - " +error.error.level+ "     Status -  "+error.error.status_text;

  this.alert.class="danger"
}));

}

// ------------------------------ upload end -----------------------------------








// ----------view all data ----------------

viewColumns:Object={};
rows:any=[];
tempRows:any=[];
filtersForAllView:any={
"record_status":"Active"

};

viewColumnAll:any=[
{
  name:"ID",
  prop:"id"
},
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
  name:"Feeder Branch",
  prop:"feeder_branch"
},
{
  name:"Date & Time",
  prop:"datafor_date_time"
},
{
  name:"Actual Loading 100",
  prop:"actual_loading_100"
},
{
  name:"Actual Loading 200",
  prop:"actual_loading_200"
},
{
  name:"Actual Loading 500",
  prop:"actual_loading_500"
},
{
  name:"Actual Loading 2000",
  prop:"actual_loading_2000"
},
{
  name:"Actual Loading Total",
  prop:"actual_loading_total"
},
{
  name:"Planning 100",
  prop:"planning_100"
},
{
  name:"Planning 200",
  prop:"planning_200"
},
{
  name:"Planning 500",
  prop:"planning_500"
},
{
  name:"Planning 2000",
  prop:"planning_2000"
},
{
  name:"Planning Total",
  prop:"planning_total"
},
{
  name:"Revised Planning 100",
  prop:"revised_planning_100"
},
{
  name:"Revised Planning 200",
  prop:"revised_planning_200"
},
{
  name:"Revised Planning 500",
  prop:"revised_planning_500"
},
{
  name:"Revised Planning 2000",
  prop:"revised_planning_2000"
},
{
  name:"Revised Planning Total",
  prop:"revised_planning_total"
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
this.viewColumn=this.viewColumnAll.filter( (col) => {
return this.selectedColumn.includes(col.prop);
})
// }
console.log("col change",this.selectedColumn,this.viewColumn);
}



viewSearch(event) {
    console.log("updateing");
      const val = event.target.value.toLowerCase();

      const temp = this.tempRows.filter(function(d) {
          var search_atm_id=d.atm_id.toLowerCase().indexOf(val) !== -1;
          var search_bank_name=d.bank_name.toLowerCase().indexOf(val) !== -1;
          var search_project_id=d.project_id.toLowerCase().indexOf(val) !== -1;
         return search_atm_id || search_bank_name || search_project_id || !val ;      
         });

      this.rows = temp;
}
 

updateViewAll(){
console.log("updarte called");
console.log('filter parameter',this.filtersForAllView);
this.setPage({ offset: 0 });
$('#modalfilter').modal('hide');
}

setPage(pageInfo){
// console.log("page clicked");
console.log("page clicked",pageInfo);

this.page.pageNumber = pageInfo.offset;
this.apiService.post("view/?page="+(this.page.pageNumber+1)+"&"+"page_size="+this.page.size,{
  'file_type':"Daily_Loading_Report",
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
 var response:any=data;
  //   this.page = pagedData.page;
  // this.temp = [...data];

  // push our inital complete list
this.rows = response.results;
 this.tempRows= response.results;
 this.page.totalElements=response.count;
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
let filterParam:any[] = [];

this.previewColList.forEach(x => {
  filterParam.push([x.table_column,val]);
});

const temp = this.searchFilter(filterParam);

// update the rows
this.previewRows = temp;
}

searchFilter(filters):any[] {
let returnVal:any[] = [];
let columnName : string;
let val : string;
  this.tempPreviewRow.forEach(x => {
      for(var i = 0; i < filters.length; i++){
        if(filters != undefined){
          columnName = filters[i][0];
          val = filters[i][1].toString();
          if(x[columnName].toString().toLowerCase().indexOf(val) !== -1){
            if(returnVal.indexOf(x) == -1)
              returnVal.push(x);
          }
        }
      } 
  });
return returnVal;
}




setPreviewPage(pageInfo){
console.log("page clicked");
this.previewPage.pageNumber = pageInfo.offset;

this.updatePreview()
}


updatePreview(){
var hours_min=this.uploadData.time.split(":")
this.uploadData.upload_datetime=new Date(this.uploadData.date);
this.uploadData.upload_datetime.setHours(hours_min[0],hours_min[1])
var date=this.datePipe.transform(this.uploadData.upload_datetime, 'yyyy-MM-dd HH:mm:ss');


// fileData.append('file', this.uploadData.file,this.uploadData.file.name);
// fileData.append('bank_code', this.uploadData.bank_code);
// fileData.append('project_id', this.uploadData.project);
// // fileData.append('project_id', "MOF");
// // fileData.append('cra', this.uploadData.cra);
// fileData.append('file_type', 'CBR');
// fileData.append('upload_datatime', date);
// console.log("upload clicked formdata",fileData);


  this.apiService.post("view/?page="+(this.previewPage.pageNumber+1)+"&"+"page_size="+this.previewPage.size,{
    'page':this.page,
    'file_type':"Daily_Loading_Report",
    "bank_code":"ALL",
    "filters" : {
      //  "datafor_date_time":"2018-09-26 18:16:23",
      "datafor_date_time": date,
      // "project_id": this.uploadData.project.project_id,
"record_status":"Approval Pending",      
    }}).subscribe(data =>{
      console.log("-------get all preview");
   console.log(data); // handle event here

   var response:any=data;
    //   this.page = pagedData.page;
    // this.temp = [...data];
    
    // push our inital complete list
    // this.rows = data;

    this.tempPreviewRow=response.results;

   this.previewRows=response.results;
   this.previewPage.totalElements=response.count;

  // this.tempPreviewRow.push(response.results);
  this.tempPreviewRow = [...response.results]
  // this.previewRows=[];
  // this.previewRows.push(response.results);
   this.previewRows = [...response.results]
  // this.previewRows = this.previewRows[0]

   console.log('prevew data',this.previewRows);
  })
}


approvePreviewFn(status){
  var hours_min=this.uploadData.time.split(":")
  this.uploadData.upload_datetime=new Date(this.uploadData.date);
  this.uploadData.upload_datetime.setHours(hours_min[0],hours_min[1])
  var date=this.datePipe.transform(this.uploadData.upload_datetime, 'yyyy-MM-dd HH:mm:ss');

  this.apiService.post("status/",{
    'file_type':this.fileType,
    // "bank_code":this.uploadData.bank_code.bank_id,
    // "project_id": this.uploadData.project.project_id,
    "cra": this.uploadData.cra,
    "datafor_date_time":date,
    "status":status,
    // "filters" : {
    //   //  "datafor_date_time":"2018-09-26 18:16:23",
    //   // "datafor_date_time": date,
    //   // "record_status":"Approval Pending"
    // }
  }).subscribe(data =>{
      console.log("-------approved ");
   console.log(data); // handle event here
   var response:any=data;
   if(status=="Approved"){
    this.alert.isvisible=true;
    this.alert.type="Upload";
   this.alert.class="success"
   this.alert.text=" Data Approved";
   }
   if(status=="Rejected"){
    this.alert.isvisible=true;
    this.alert.type="Upload";
   this.alert.class="success"
   this.alert.text=" Data Rejected";
   }
   
// $('#modalfilter').modal('hide');
this.modalRef.hide()
  },(error) =>{
    console.log("error",error)
    this.alert.isvisible=true;
    this.alert.type="Upload";
   this.alert.class="danger"
   this.alert.text=" Something Went Wrong";
  })
}


openPreviewModal() {
$('#m_modal_6').modal('hide');
  console.log(this.previewModal);
  this.modalRef = this.modalService.show(this.previewModal, Object.assign({}, { class: 'preview-modal modal-lg' }));
}


// ------- end of preview modal ----------




// --------------- drop down value --------------
populateDropDown(){
  

// --------- for upload dropdown
  this.apiService.post("bankinfo/",{
    'file_type':this.fileType,
  'routine_info':"ROUTINE_DATA_INFO"
  }).subscribe(data =>{
      console.log("------- dropdown value ");
     var response:any=data;
  
     console.log("-------dropdown",response.data);
   this.dropdownValue=response.data; 
   console.log(this.dropdownValue); // handle event here

  },(error) =>{
    console.log("error in dropdown value",error)
   
  })
  // --------------- end of upload dropdown 

  // filter dropdown
  this.apiService.post("bankFeederCommonInfo/",{
    'file_type':this.fileType,
  'common_bankfeeder_info':"common_bankfeeder_info"
  }).subscribe(data =>{
      console.log("------- dropdown value ");
     var response:any=data;
  
     this.filterDropDownValue=response;
     console.log("------- filter dropdown ",this.filterDropDownValue);

  //  this.dropdownValue=[response.data]; 
  //  console.log(this.dropdownValue); // handle event here

  },(error) =>{
    console.log("error in filter dropdown value",error)
   
  })
  // end of filter dropdown
}

// --------------- end of drop down value --------------


clicked(data){
  console.log(data)
}



calculateTotalPage(rowcount,rowsize){
  return Math.ceil(rowcount/rowsize);
    }


}
