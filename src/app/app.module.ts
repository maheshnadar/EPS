import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


//extra
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopNavbarComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FileUploadModule,
    FormsModule,
    TooltipModule.forRoot(),
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
