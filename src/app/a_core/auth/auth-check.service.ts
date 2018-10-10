import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable} from 'rxjs/Rx';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';




@Injectable({
  providedIn: 'root'
})
export class AuthCheckService  implements CanActivate{
  @LocalStorage() accessToken: String ;


// this will check for login status 



  constructor(private router: Router) { }

  canActivate(
    
  ): Observable<boolean>|Promise<boolean>|boolean {

//your login check here


    if (this.accessToken) {
      return true;
         }
  else{
  //Redirect the user before denying them access to this route
       this.router.navigate(['/login']);
       return false;
  }

 // return true;


  }

  
}
