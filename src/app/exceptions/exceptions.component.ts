import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http
} from '@angular/http';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  map
} from 'rxjs/operators';
import {
  HttpHeaders
} from "@angular/common/http";


import 'rxjs/add/operator/map'


//constant
import {
  domain
} from '../shared/domain';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const url = "http://192.168.0.108:8081/ticket/";

@Component({
  selector: 'app-exceptions',
  templateUrl: './exceptions.component.html',
  styleUrls: ['./exceptions.component.scss']
})
export class ExceptionsComponent implements OnInit {
  allException: object[];
  AllRequiredField = ['ticket_id', 'subject', 'description', 'additional_info', 'ticket_category', 'ticket_status', 'created_on', 'created_by', 'assigned_to_role', 'assigned_to_user', 'assigned_by_user', 'assigned_on', 'closed_by_user', 'closed_on', 'close_comments']
  requiredField = ['ticket_id', 'subject', 'description'];
  selected = [];
  rows = [{
      ID: 'Austin',
      gender: 'Male',
      company: 'Swimlane'
    },
    {
      ID: 'Dany',
      gender: 'Male',
      company: 'KFC'
    },
    {
      ID: 'Molly',
      gender: 'Female',
      company: 'Burger King'
    },
  ];
  allTitle = [{
      prop: 'name'
    },
    {
      name: 'Gender'
    },
    {
      name: 'Company'
    }
  ];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getall();
  }






  getall() {
    this.http.post(url + "get_all/", {
        "access_token": "978DBDSGSWNWHU",
        "required_fields": this.requiredField,
        "filter": {
          "ticket_category": "UserTicket"
        }
      }, httpOptions)
      .subscribe(
        data => {
          var x: any = data;
          this.rows = JSON.parse(x)
          console.log("POST Request is successful ", this.rows);
        },
        error => {
          console.log("Error", error);
        }
      );
  }











  //tabledata

  onSelect({
    selected
  }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [this.rows[1], this.rows[3]];
  }

  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }


}
