import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




//extra
// ngxbootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap';





import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';
import { ExceptionsComponent } from './exceptions/exceptions.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CreateExceptionComponent } from './exceptions/create-exception/create-exception.component';
import { ViewexceptionComponent } from './exceptions/viewexception/viewexception.component';
import { DatatableComponent } from './datatable/datatable.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopNavbarComponent,
    MainContentComponent,
    ExceptionsComponent,
    CreateExceptionComponent,
    ViewexceptionComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpClientModule,
    AppRoutingModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
