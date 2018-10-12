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


//time picker
import { AmazingTimePickerModule } from 'amazing-time-picker';

//ngx store
import { WebStorageModule } from 'ngx-store';




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
import { LoginComponent } from './login/login.component';
import { Crac3rreportComponent } from './crac3rreport/crac3rreport.component';
import { CraemailmasterComponent } from './craemailmaster/craemailmaster.component';
import { CraescalationemailsComponent } from './craescalationemails/craescalationemails.component';
import { CrasComponent } from './cras/cras.component';
import { CravaultmasterComponent } from './cravaultmaster/cravaultmaster.component';
import { CyphercodeComponent } from './cyphercode/cyphercode.component';
import { DailyloadingreportComponent } from './dailyloadingreport/dailyloadingreport.component';
import { DiversionComponent } from './diversion/diversion.component';
import { EmergencyvaultingreportComponent } from './emergencyvaultingreport/emergencyvaultingreport.component';
import { ExceptionreportComponent } from './exceptionreport/exceptionreport.component';
import { HolidaymasterComponent } from './holidaymaster/holidaymaster.component';
import { ImsticketsComponent } from './imstickets/imstickets.component';
import { IndentsComponent } from './indents/indents.component';
import { IndentsrevisionsComponent } from './indentsrevisions/indentsrevisions.component';
import { IndentvswithdrawlvsloadingreportComponent } from './indentvswithdrawlvsloadingreport/indentvswithdrawlvsloadingreport.component';
import { InsurancelimitComponent } from './insurancelimit/insurancelimit.component';
import { LoadingComponent } from './loading/loading.component';
import { OriginalvsrevisedindentsreportComponent } from './originalvsrevisedindentsreport/originalvsrevisedindentsreport.component';
import { QualifyatmsComponent } from './qualifyatms/qualifyatms.component';
import { RecommendationsheetComponent } from './recommendationsheet/recommendationsheet.component';
import { RestartstopindentsComponent } from './restartstopindents/restartstopindents.component';
import { SubmitindentrevisionsComponent } from './submitindentrevisions/submitindentrevisions.component';
import { SystemsettingsComponent } from './systemsettings/systemsettings.component';
import { UserrolesComponent } from './userroles/userroles.component';
import { UsersComponent } from './users/users.component';
import { VaultcashComponent } from './vaultcash/vaultcash.component';
import { VaultingComponent } from './vaulting/vaulting.component';
import { WithdrawlComponent } from './withdrawl/withdrawl.component';



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
    LoginComponent,
    Crac3rreportComponent,
    CraemailmasterComponent,
    CraescalationemailsComponent,
    CrasComponent,
    CravaultmasterComponent,
    CyphercodeComponent,
    DailyloadingreportComponent,
    DiversionComponent,
    EmergencyvaultingreportComponent,
    ExceptionreportComponent,
    HolidaymasterComponent,
    ImsticketsComponent,
    IndentsComponent,
    IndentsrevisionsComponent,
    IndentvswithdrawlvsloadingreportComponent,
    InsurancelimitComponent,
    LoadingComponent,
    OriginalvsrevisedindentsreportComponent,
    QualifyatmsComponent,
    RecommendationsheetComponent,
    RestartstopindentsComponent,
    SubmitindentrevisionsComponent,
    SystemsettingsComponent,
    UserrolesComponent,
    UsersComponent,
    VaultcashComponent,
    VaultingComponent,
    WithdrawlComponent,
  
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    WebStorageModule,
    HttpClientModule,
    AppRoutingModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AmazingTimePickerModule,
    
       ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
