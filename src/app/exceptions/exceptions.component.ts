import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpHeaders} from "@angular/common/http";


import 'rxjs/add/operator/map'
const domain="localhost:5000/"

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const url="http://192.168.0.108:8081/ticket/";

@Component({
  selector: 'app-exceptions',
  templateUrl: './exceptions.component.html',
  styleUrls: ['./exceptions.component.scss']
})
export class ExceptionsComponent implements OnInit {
  allException:object[];


  constructor (private http: HttpClient  ) {
  

  //   this.http.get('http://192.168.0.108:8080/ticket/get_all/').pipe(map(data => {})).subscribe(result => {
  //   console.log(result);
  // });

  this.getall();
  }

  ngOnInit() {
  
  }


  
 
 getapi(url){
  this.http.get(domain+url).pipe(map(data => {})).subscribe(result => {
    return result;
  });
 }


 getall(){
  this.http.post(url+"get_all/",
  {
    "access_token": "978DBDSGSWNWHU",
    "required_fields":["ticket_id"],
    "filter":{
     "ticket_category":"UserTicket"
    }
 },httpOptions)
  .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      }
  );
 }
 
}
