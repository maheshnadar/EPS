import {
  Injectable
} from '@angular/core';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from 'ngx-store';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {
 
  constructor(private sessionStorageService: SessionStorageService) {

  }


 
  getMenu() {
const menu=this.sessionStorageService.get('menu');
if(!menu){
 // window.location.href='http://192.168.75.15:8000/login';
}
console.log(menu,"----menu",JSON.parse(menu));
    console.log()
    return JSON.parse(menu);
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

