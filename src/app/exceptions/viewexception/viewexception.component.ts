import { Component, OnInit ,TemplateRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';




declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-viewexception',
  templateUrl: './viewexception.component.html',
  styleUrls: ['./viewexception.component.scss']
})
export class ViewexceptionComponent implements OnInit {
  requiredField=['ticket_id','subject','ticket_category', 'ticket_status','additional_info','created_by','assigned_to_role','assigned_to_user'];
  exceptionDetails:object;
  reply:string;
  status:boolean;


  constructor(private route:ActivatedRoute,private apiService: ApiService  ) 
  { }



  ngOnInit() {
this.status=true;

   let id= this.route.snapshot.paramMap.get('id');
console.log("id",id);
this.getdata(id);

  }


  replyfn(reply:string,id:number){
  console.log(reply,id);
  this.reply="";
  var param={
  "ticket_id":id,
  "replymessage":reply
}
this.apiService.post('ticket/create_reply/',param).subscribe(
  data =>{
console.log("sucess in reply",data);
this.getdata(id)
  },
  error=>{
    console.log("error in reply");
  }
)

  }

  getdata(id:any){
    
    var param={
     
      // "required_fields":this.requiredField,
      "ticket_id":id
      //  "filter":{
      //   "ticket_category":"UserTicket"
      //  }
    }

  this.apiService.post('ticket/view_all/',param).subscribe(
    data => {    
       console.log("POST Request is successful ",data);
       this.exceptionDetails=data;
       this.scrollUpReply();
    },
    error => {
        console.log("Error", error);
    }
);
  }



  scrollUpReply(){
    var height=$('#comment').prop('scrollHeight')
    $('#comment').scrollTop(height+100);
  }
}
