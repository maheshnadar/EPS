
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


  this.menulist.getMenu();
  console.log('side menu list',this.menulist.Menu);
  }


  ngOnInit() {}

}
