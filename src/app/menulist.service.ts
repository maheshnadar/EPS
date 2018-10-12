import {
  Injectable
} from '@angular/core';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from 'ngx-store';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {
 Menu
  constructor(private sessionStorageService: SessionStorageService) {

  }

setMenu(menu:any){
  this.Menu=menu;
}
 
  getMenu() {
    console.log("getting menu from session");
const menufromsession=this.sessionStorageService.get('menu');
if(!menufromsession){
 // window.location.href='http://192.168.75.15:8000/login';
}
console.log(menufromsession,"----menu",JSON.parse(menufromsession));
this.Menu=JSON.parse(menufromsession);
    console.log()
    // return JSON.parse(menufromsession);
  //   switch (role) {
  //     case 'Cash Batch Operator':
  //       {
  //         return [{
  //           name: "Dashboard",
  //           path: "dashboard"
         
  //         }, 
  //         // {
  //         //   name: "exception List",
  //         //   submenu: [{
  //         //       name: "view exception",
  //         //       path: "exceptions"
  //         //     },
  //         //     {
  //         //       name: "create exception",
  //         //       path: "addexception",
  //         //      new:true
  //         //     }
  //         //     ,
  //         //   ]
  //         // }
  //           {
  //           name: "Cash Routine Data",
  //           submenu: [{
  //               name: "Bank Cash Balance",
  //               path: "bankcashbalance"
  //             },
  //             {
  //               name: "Cash Dispense",
  //               path: "cashdispense",
  // //             new:true
  //             }]
  //         }
  //       ];
         
  //       }

  //     case "none":
  //       {
  //         return
  //       }
  //   }


  }


  
}

