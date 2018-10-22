import { Component, OnInit,ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {DatatableComponent} from '@swimlane/ngx-datatable/src/components/datatable.component';



//custom
import {ApiService} from '../apiservice.service';

@Component({
  selector: 'app-exceptions',
  templateUrl: './exceptions.component.html',
  styleUrls: ['./exceptions.component.scss'],

})
export class ExceptionsComponent implements OnInit {
  title:string;




  allException:object[];

  AllRequiredField=['ticket_id','subject','description',
  'additional_info','ticket_category','ticket_status',
  'created_on','created_by','assigned_to_role', 'assigned_to_user',
  'assigned_by_user','assigned_on','closed_by_user',
  'closed_on','close_comments']
requiredField=['ticket_id','subject','ticket_category', 'ticket_status','additional_info','created_by','assigned_to_role','assigned_to_user'];
  selected = [];
  rows = [];
  temp = [];  // for filter
 // @ViewChild(DatatableComponent) table: DatatableComponent;
  allTitle = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  constructor (private apiService: ApiService  ) {
this.title="this is tilte";
  }

  ngOnInit() {
    this.getall();
  }


  
 
 

 getall(){

    var param={
   
        "required_fields":this.requiredField,
        //  "filter":{
        //   "ticket_category":"UserTicket"
        //  }
      }

    this.apiService.post('ticket/get_all/',param).subscribe(
      data => {
          var tabledata:any=data;
         this.rows=tabledata;
         this.temp = tabledata;
         console.log("POST Request is successful ",this.rows);
      },
      error => {
          console.log("Error", error);
      }
  );
 }











//tabledata

onSelect({ selected }) {
  console.log('Select Event', selected, this.selected);

  this.selected.splice(0, this.selected.length);
  this.selected.push(...selected);
}
onActivate(event) {
 // console.log('Activate Event', event);
}

add() {
  this.selected.push(this.rows[1], this.rows[3]);
}

update() {
  this.selected = [ this.rows[1], this.rows[3] ];
}

displayCheck(row) {
  console.log("display check called",row)
  // return row.name !== 'Ethel Price';
}



updateFilter(event) {
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.temp.filter(function(d) {
    return d.subject.toLowerCase().indexOf(val) !== -1 || !val;
  });

  // update the rows
  this.rows = temp;
  // Whenever the filter changes, always go back to the first page
// this.table.offset = 0;
}

 
}
