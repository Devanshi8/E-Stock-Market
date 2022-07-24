import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { CompanyComponent } from './company/company.component';
import { GetComponent } from './get/get.component';
import { GetallComponent } from './getall/getall.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  
  {
    path: 'get',
    component: GetComponent
  },
  {
    path: 'getall',
    component: GetallComponent
  },
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
