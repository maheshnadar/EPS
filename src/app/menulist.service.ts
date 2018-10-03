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
          }, {
            name: "exception List",
            submenu: [{
                name: "view exception",
                path: "exceptions"
              },
              {
                name: "create exception",
                path: "addexception"
              }
            ]
          }];
         
        }

      case "none":
        {
          return
        }
    }


  }
}

