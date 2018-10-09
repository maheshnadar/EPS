import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice.service';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService:ApiService) {
   

    apiService.login().subscribe(data => {

    console.log(data);
    },(error) => {
      console.log("error",error)
      var html=error.error.text
     // var tempDom = $('<div></div>').append($.parseHTML(error.error.text));
      var parsedHtml=$.parseHTML(error.error.text)
      console.log("body element",parsedHtml.find('title')[0].outerHTML)

      
            
    })

    
   }

  ngOnInit() {
  }

}
