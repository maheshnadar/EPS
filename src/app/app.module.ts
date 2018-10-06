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
import { BsDatepickerModule } from 'ngx-bootstrap';





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
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { AtmsComponent } from './atms/atms.component';
import { AtmdowntimereportComponent } from './atmdowntimereport/atmdowntimereport.component';
import { Bankc3rmistemplateComponent } from './bankc3rmistemplate/bankc3rmistemplate.component';
import { Bankc3rreporttemplateComponent } from './bankc3rreporttemplate/bankc3rreporttemplate.component';
import { BankcashbalanceComponent } from './bankcashbalance/bankcashbalance.component';
import { BankcashlimitComponent } from './bankcashlimit/bankcashlimit.component';
import { BankemailmasterComponent } from './bankemailmaster/bankemailmaster.component';
import { BankwiseuserrolesmatrixComponent } from './bankwiseuserrolesmatrix/bankwiseuserrolesmatrix.component';
import { C3rmisreportComponent } from './c3rmisreport/c3rmisreport.component';
import { C3rtobankreportComponent } from './c3rtobankreport/c3rtobankreport.component';
import { CashdispenseComponent } from './cashdispense/cashdispense.component';
import { CashloadingComponent } from './cashloading/cashloading.component';
import { CassetteconfigsComponent } from './cassetteconfigs/cassetteconfigs.component';
import { ConfigurabledenominationsComponent } from './configurabledenominations/configurabledenominations.component';
import { ConfigurablelimitsComponent } from './configurablelimits/configurablelimits.component';


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
    DashboardComponent,
    FooterComponent,
    QuickSidebarComponent,
    AtmsComponent,
    AtmdowntimereportComponent,
    Bankc3rmistemplateComponent,
    Bankc3rreporttemplateComponent,
    BankcashbalanceComponent,
    BankcashlimitComponent,
    BankemailmasterComponent,
    BankwiseuserrolesmatrixComponent,
    C3rmisreportComponent,
    C3rtobankreportComponent,
    CashdispenseComponent,
    CashloadingComponent,
    CassetteconfigsComponent,
    ConfigurabledenominationsComponent,
    ConfigurablelimitsComponent,
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
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
       ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
