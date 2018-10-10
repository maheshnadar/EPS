import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//extra
import {domain} from './shared/domain';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';





@Injectable({
  providedIn: 'root'
})
export class ApiService {
  @LocalStorage() accessToken: String ;





  httpOptionsForm = {
  };
  httpOptions={};


  constructor( private http: HttpClient) {


    this.httpOptionsForm = {
      headers: new HttpHeaders({'Authorization': ''+this.accessToken}),
      reportProgress: true,
      observe: 'events'
    };


    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': ''+this.accessToken })
    };
   }



  post(url,param){

     return this.http.post(domain+url,param,this.httpOptions)
}

get(url){
  return this.http.get(domain+url)
}
login(){
 
   return this.http.get("http://192.168.75.15")
  
}

uploadFile(url,data){
  //data["access_token"]= "978DBDSGSWNWHU";
  return this.http.post(domain+url, data,this.httpOptionsForm)
    
  //   {
  //   reportProgress: true,
  //   observe: 'events'
  // }




}

}
