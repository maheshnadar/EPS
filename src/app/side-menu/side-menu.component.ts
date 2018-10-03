
import {MenulistService} from "../menulist.service";
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
  constructor(private menulist:MenulistService) {

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

  this.sideMenu=this.menulist.getMenu('Cash Batch Operator');
  console.log('side menu list',this.sideMenu);
  }


  ngOnInit() {}

}
