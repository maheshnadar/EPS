import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';



import {AuthCheckService} from './a_core/auth/auth-check.service';

import {LoginComponent} from './login/login.component';


import {MainContentComponent} from './main-content/main-content.component';
import {DatatableComponent} from './datatable/datatable.component';

import {AtmdowntimereportComponent} from './atmdowntimereport/atmdowntimereport.component';
import {AtmsComponent} from './atms/atms.component';
import {Bankc3rmistemplateComponent} from './bankc3rmistemplate/bankc3rmistemplate.component';
import {Bankc3rreporttemplateComponent} from './bankc3rreporttemplate/bankc3rreporttemplate.component';
import {BankcashbalanceComponent} from './bankcashbalance/bankcashbalance.component';
import {BankcashlimitComponent} from './bankcashlimit/bankcashlimit.component';
import {BankemailmasterComponent} from './bankemailmaster/bankemailmaster.component';
import {BankwiseuserrolesmatrixComponent} from './bankwiseuserrolesmatrix/bankwiseuserrolesmatrix.component';
import {C3rmisreportComponent} from './c3rmisreport/c3rmisreport.component';
import {C3rtobankreportComponent} from './c3rtobankreport/c3rtobankreport.component';
import {CashdispenseComponent} from './cashdispense/cashdispense.component';
import {CashloadingComponent} from './cashloading/cashloading.component';
import {CassetteconfigsComponent} from './cassetteconfigs/cassetteconfigs.component';
import {ConfigurabledenominationsComponent} from './configurabledenominations/configurabledenominations.component';
import {ConfigurablelimitsComponent} from './configurablelimits/configurablelimits.component';
import {Crac3rreportComponent} from './crac3rreport/crac3rreport.component';
import {CraemailmasterComponent} from './craemailmaster/craemailmaster.component'
import {CraescalationemailsComponent} from './craescalationemails/craescalationemails.component'
import {CrasComponent} from './cras/cras.component'
import {CravaultmasterComponent} from './cravaultmaster/cravaultmaster.component'
import {CyphercodeComponent} from './cyphercode/cyphercode.component'
import {DailyloadingreportComponent} from './dailyloadingreport/dailyloadingreport.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DiversionComponent} from './diversion/diversion.component';
import {EmergencyvaultingreportComponent} from './emergencyvaultingreport/emergencyvaultingreport.component';

import {ExceptionsComponent} from './exceptions/exceptions.component';
import {CreateExceptionComponent} from './exceptions/create-exception/create-exception.component';
import {ViewexceptionComponent} from './exceptions/viewexception/viewexception.component';


import {ExceptionreportComponent} from './exceptionreport/exceptionreport.component';
import {HolidaymasterComponent} from './holidaymaster/holidaymaster.component';
import {ImsticketsComponent} from './imstickets/imstickets.component';
import {IndentsComponent} from './indents/indents.component';
import {IndentsrevisionsComponent} from './indentsrevisions/indentsrevisions.component';
import {IndentvswithdrawlvsloadingreportComponent} from './indentvswithdrawlvsloadingreport/indentvswithdrawlvsloadingreport.component';
import {InsurancelimitComponent} from './insurancelimit/insurancelimit.component';
import {LoadingComponent} from './loading/loading.component';
import {OriginalvsrevisedindentsreportComponent} from './originalvsrevisedindentsreport/originalvsrevisedindentsreport.component';


const routes: Routes = [
  { path: 'main', component: MainContentComponent, canActivate: [AuthCheckService]},
  { path:'datatable',component:DatatableComponent},

  


  { path:'atmdowntimereport',component:AtmdowntimereportComponent},  
  { path:'atms',component:AtmsComponent},
  { path:'bankc3rmistemplate',component:Bankc3rmistemplateComponent},
  { path:'bankc3rreporttemplate',component:Bankc3rreporttemplateComponent},
  { path:'bankcashbalance',component:BankcashbalanceComponent},
  { path:'bankcashlimit',component:BankcashlimitComponent},
  { path:'bankemailmaster',component:BankemailmasterComponent},
  { path:'bankwiseuserrolesmatrix',component:BankwiseuserrolesmatrixComponent},
  { path:'c3rmisreport',component:C3rmisreportComponent},
  { path:'c3rtobankreport',component:C3rtobankreportComponent},
  { path:'cashdispense',component:CashdispenseComponent},
  { path:'cashloading',component:CashloadingComponent},
  { path:'cassetteconfigs',component:CassetteconfigsComponent},
  { path:'configurabledenominations',component:ConfigurabledenominationsComponent},
  { path:'configurablelimits',component:ConfigurablelimitsComponent},
  { path:'crac3rreport',component:Crac3rreportComponent},
  { path:'craemailmaster',component:CraemailmasterComponent},
  { path:'craescalationemails',component:CraescalationemailsComponent},
  { path:'cras',component:CrasComponent},
  { path:'cravaultmaster',component:CravaultmasterComponent},
  { path:'cyphercode',component:CyphercodeComponent},
  { path:'dailyloadingreport',component:DailyloadingreportComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'diversion',component:DiversionComponent},
  { path:'emergencyvaultingreport',component:EmergencyvaultingreportComponent},
  { path: 'exceptions', component: ExceptionsComponent }, 
  { path: 'addexception', component: CreateExceptionComponent },  //addexception
  { path: 'viewexception/:id', component: ViewexceptionComponent },  //exceptiondetails
  { path:'exceptionreport',component:ExceptionreportComponent},
  { path:'holidaymaster',component:HolidaymasterComponent},
  { path:'imstickets',component:ImsticketsComponent},
  { path:'indents',component:IndentsComponent},
  { path:'indentsrevisions',component:IndentsrevisionsComponent},
  { path:'indentvswithdrawlvsloadingreport',component:IndentvswithdrawlvsloadingreportComponent},
  { path:'insurancelimit',component:InsurancelimitComponent},
  { path:'loading',component:LoadingComponent},
  { path:'originalvsrevisedindentsreport',component:OriginalvsrevisedindentsreportComponent},

  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'login' ,component:LoginComponent}   //no index.php only login
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
  
}
