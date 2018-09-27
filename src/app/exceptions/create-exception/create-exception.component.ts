import { Component, OnInit,TemplateRef } from '@angular/core';
import { ApiService } from '../../apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';




@Component({
  selector: 'app-create-exception',
  templateUrl: './create-exception.component.html',
  styleUrls: ['./create-exception.component.scss']
})
export class CreateExceptionComponent implements OnInit {
  creatExcepForm:FormGroup


  //modal
  createdModal: BsModalRef;



  constructor(private apiservice:ApiService,private modalService: BsModalService) { }



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



  OpenCreateModal(template: TemplateRef<any>) {
    this.createdModal = this.modalService.show(template);
  }


}
