import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../apiservice.service';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from 'ngx-store';
import {MenulistService} from "../menulist.service";

declare var $:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent implements OnInit {
  v;
// // it will be stored under ${prefix}viewCounts name
// @LocalStorage() accessToken: String ;
// // this under name: ${prefix}differentLocalStorageKey
// @LocalStorage('differentLocalStorageKey') userName: string = '';
// // it will be stored under ${prefix}itWillBeRemovedAfterBrowserClose in session storage
// @SessionStorage({key: 'itWillBeRemovedAfterBrowserClose'}) previousUserNames: Array<string> = [];
// // it will be read from cookie 'user_id' (can be shared with backend) and saved to localStorage and cookies after change
// @LocalStorage() @CookieStorage({prefix: '', key: 'user_id'}) userId: string = '';
// // it will be stored in a cookie named ${prefix}user_workspaces for 24 hours
// @CookieStorage({key: 'user_workspaces', expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}) userWorkspaces = [];

  constructor( private sessionStorageService: SessionStorageService,
    private apiService:ApiService,private router:Router,
    private activatedRoute: ActivatedRoute,
    private menulistservice:MenulistService) {
 console.log(sessionStorageService.get('accessToken'));
    this.activatedRoute.queryParams.subscribe(paramsId => {
      console.log(paramsId);
      this.v = paramsId.v;
  });

   
    //----------local storage
    //this.viewCounts++;
    // console.log("view count",this.viewCounts);
    // this.userName = 'some name stored in localstora         ge';
    // this.previousUserNames.push(this.userName);
    // for (let userName of this.previousUserNames) {
    //   console.log(userName);
    // }
    // this.previousUserNames.map(userName => userName.split('').reverse().join(''));
  //---------- end of local storage



  // --- ad login 

        // apiService.login().subscribe(data => {
        //       console.log(data);
        //       },(error) => {
        //        console.log("error",error)
        //       var html=error.error.text
               
        //        var parsedHtml=$.parseHTML(error.error.text)
        //       console.log("body element",parsedHtml.find('title')[0].outerHTML);   



        //       })

        
  // --- end of ad login 

  apiService.post('login/',{v:this.v}).subscribe(data1 => {

      if(data1['is_login_success']){
  var accesstoken="Bearer "+data1['jwt_token'];
    this.sessionStorageService.set('accessToken',accesstoken);
    this.sessionStorageService.set('menu',data1['menus_data']);
    this.menulistservice.setMenu( JSON.parse(data1['menus_data']) );
console.log("new accesstoken",this.sessionStorageService.get('accessToken'));
    this.router.navigate(['./dashboard']);
      }
    },
  (error) =>{
    console.log(error)
  //   error={
  //     'is_login_success':true,
  //     'token':'aaaaaaaaaaa'
  //   }


  

  }
  )

    
   }

  ngOnInit() {
  }

}
