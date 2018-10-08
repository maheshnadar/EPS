import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {

  constructor() {}


  getMenu(role: string) {
    switch (role) {
      case 'Cash Batch Operator':
        {
          return [{
            name: "Dashboard",
            path: "dashboard"
         
          }, 
          // {
          //   name: "exception List",
          //   submenu: [{
          //       name: "view exception",
          //       path: "exceptions"
          //     },
          //     {
          //       name: "create exception",
          //       path: "addexception",
          //      new:true
          //     }
          //     ,
          //   ]
          // }
            {
            name: "Cash Routine Data",
            submenu: [{
                name: "Bank Cash Balance",
                path: "bankcashbalance"
              },
              {
                name: "Cash Dispense",
                path: "cashdispense",
  //             new:true
              }]
          }
        ];
         
        }

      case "none":
        {
          return
        }
    }


  }
}

