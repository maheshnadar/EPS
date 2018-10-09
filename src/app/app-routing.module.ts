import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';



import {AuthCheckService} from './a_core/auth/auth-check.service';

import {LoginComponent} from './login/login.component';


import {MainContentComponent} from './main-content/main-content.component';
import {DatatableComponent} from './datatable/datatable.component';
import {DashboardComponent} from './dashboard/dashboard.component';

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




import {ExceptionsComponent} from './exceptions/exceptions.component';
import {CreateExceptionComponent} from './exceptions/create-exception/create-exception.component';
import {ViewexceptionComponent} from './exceptions/viewexception/viewexception.component';

const routes: Routes = [
  { path: 'main', component: MainContentComponent, canActivate: [AuthCheckService]},
  { path:'datatable',component:DatatableComponent},
  { path: 'exceptions', component: ExceptionsComponent },
  { path: 'addexception', component: CreateExceptionComponent },
  { path: 'viewexception/:id', component: ViewexceptionComponent },
  { path:'dashboard',component:DashboardComponent},
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
  
  
  
  
  
  
  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'login' ,component:LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
  
}
