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
 
  updateMenu() {
    
    console.log("getting menu from session");
const menufromsession=this.sessionStorageService.get('menu');
if(!menufromsession){
 // window.location.href='http://192.168.75.15:8000/login';
}else{
  console.log(menufromsession,"----menu",JSON.parse(menufromsession));
  this.Menu=JSON.parse(menufromsession);
}


    
  }


  
}

