import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//extra
import {domain} from './shared/domain';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  post(url,param){
    param["access_token"]= "978DBDSGSWNWHU";
     return this.http.post(domain+url,param,httpOptions)
}

get(url){
  return this.http.get(domain+url)
}

uploadFile(url,data){
  data["access_token"]= "978DBDSGSWNWHU";
  return this.http.post(domain+url, data, {
    reportProgress: true,
    observe: 'events'
  })


}

}
