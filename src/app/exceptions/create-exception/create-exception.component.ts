import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-exception',
  templateUrl: './create-exception.component.html',
  styleUrls: ['./create-exception.component.scss']
})
export class CreateExceptionComponent implements OnInit {
  creatExcepForm:FormGroup



  constructor(private apiservice:ApiService) { }



  ngOnInit() {
    this.creatExcepForm = new FormGroup({
      'subject': new FormControl(null, Validators.required),
      'details': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
      'subtype': new FormControl(null, Validators.required),
      'atm': new FormControl(null, Validators.required),
    });
  }



  save(){
    console.log("svaed")
    console.log(this.creatExcepForm.value)
    var param={
    "access_token":"demotoken",
    "subject":this.creatExcepForm.value.subject,
    "description":this.creatExcepForm.value.details,
    "additional_info":{
                      'Type':this.creatExcepForm.value.type,
                      'Secondary Type':this.creatExcepForm.value.subject,
                      'ATM':this.creatExcepForm.value.atm},
   // "ticket_category":"",
    "ticket_status":"open",
  //  "assigned_to_role":"",
  //  "assigned_to_user":""
   }
   this.apiservice.post('ticket/create/',param).subscribe(
     (data)=>{
       console.log("sucess",data)
     },
     (error)=>{
       console.log('error',error)
     }
   )


  }


}
