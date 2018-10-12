import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//extra
import {domain} from './shared/domain';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from 'ngx-store';





@Injectable({
  providedIn: 'root'
})
export class ApiService {






  httpOptionsForm = {
  };
  httpOptions={};


  constructor(private sessionStorageService: SessionStorageService, private http: HttpClient) {
console.log(this.sessionStorageService.get('accessToken'),'---------')

    this.httpOptionsForm = {
      headers: new HttpHeaders({'Authorization': ''+this.sessionStorageService.get('accessToken')}),
      reportProgress: true,
      observe: 'events'
    };


    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': ''+this.sessionStorageService.get('accessToken') })
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
