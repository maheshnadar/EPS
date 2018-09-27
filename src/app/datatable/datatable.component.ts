import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  editing = {};
  rows = [];
  temprows=[];
  changedvalue=[];
  constructor() { 

    this.rows = [{
      'atm_id':'1',
      'atm_status':'active',
      'cash':"25000"
    },
    {
      'atm_id':'2',
      'atm_status':'active',
      'cash':"27000"
    },
    {
      'atm_id':'3',
      'atm_status':'Inactive',
      'cash':"20000"
    }]
    //this.temprows= Object.assign([], this.rows);
    this.temprows= this.rows.map(x => Object.assign({}, x));
    this.changedvalue=[]
  }

  ngOnInit() {
  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell],this.rows,this.editing);
  }

  save(){
    // ----  comparing rows and getting changed values
    this.changedvalue=[];
    console.log(this.temprows,this.rows)
    for(let i=0;i<this.rows.length;i++){

    if( JSON.stringify(this.temprows[i]) != JSON.stringify(this.rows[i]) ){
console.log("changed",this.rows[i]);
this.changedvalue.push(this.rows[i])
console.log("changed",this.rows[i],this.changedvalue);
     }

        }
  }
}
