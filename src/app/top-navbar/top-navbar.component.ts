import { Component,ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
