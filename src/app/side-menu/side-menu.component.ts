import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  sideMenu: object[];
  constructor() {

    this.sideMenu = [{
      name: "menu 1",
      link: "main"
    },
    { name: "Exception",
    link: "exceptions"}
    ,
    { name: "Menu 3",
    link: "menu3"}
  ]

  }

  ngOnInit() {}

}
