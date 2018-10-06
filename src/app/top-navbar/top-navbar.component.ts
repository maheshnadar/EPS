import { Component,ViewEncapsulation, OnInit } from '@angular/core';
declare var $: any;

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

  minimizeToggle(){
    console.log("minimize clicked");
    var minimized=$('body').hasClass('m-brand--minimize m-aside-left--minimize');

    if(!minimized){
      $('body').addClass('m-brand--minimize m-aside-left--minimize')
    }
    else{
      $('body').removeClass('m-brand--minimize m-aside-left--minimize')
    }
  }

  quickSideBarToggle(){
    console.log('quick side bar');

    var minimized=$('body').hasClass('m-quick-sidebar--on');

    if(!minimized){
      $('body').addClass('m-quick-sidebar--on')
      $('#m_quick_sidebar').addClass('m-quick-sidebar--on');
    }
    else{
      $('body').removeClass('m-quick-sidebar--on');
      $('#m_quick_sidebar').removeClass('m-quick-sidebar--on');
      
    }
    
  }

}
