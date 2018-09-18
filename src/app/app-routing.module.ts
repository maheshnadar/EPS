import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainContentComponent} from './main-content/main-content.component';
import {ExceptionsComponent} from './exceptions/exceptions.component';
import {CreateExceptionComponent} from './exceptions/create-exception/create-exception.component';

const routes: Routes = [
  { path: 'main', component: MainContentComponent },
  { path: 'exceptions', component: ExceptionsComponent },
  { path: 'addexception', component: CreateExceptionComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
  
}
