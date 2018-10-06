import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-quick-sidebar',
  templateUrl: './quick-sidebar.component.html',
  styleUrls: ['./quick-sidebar.component.scss']
})
export class QuickSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  quickSideBarToggle(){
    console.log('quick side bar');

    var minimized=$('body').hasClass('m-quick-sidebar--on');

    if(!minimized){
      $('body').addClass('m-quick-sidebar--on')
      $('#m_quick_sidebar').addClass('m-quick-sidebar--on');
    }
    else{
      $('body').removeClass('m-quick-sidebar--on')
      $('#m_quick_sidebar').removeClass('m-quick-sidebar--on');
    }
    
  }
}
