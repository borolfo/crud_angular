import { LoginGuard } from './guard/login.guard';
import { AddFattureComponent } from './fatture/add-fatture/add-fatture.component';
import { EditProvinceComponent } from './province/edit-province/edit-province.component';
import { DetailCustomerComponent } from './customer/detail-customer/detail-customer/detail-customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer/add-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { ProvinceComponent } from './province/province/province.component';
import { ComuniComponent } from './comuni/comuni.component';
import { FattureComponent } from './fatture/fatture/fatture.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer/edit-customer.component';
import { AddProvinceComponent } from './province/add-province/add-province.component';
import { AddComuniComponent } from './comuni/add-comuni/add-comuni.component';
import { EditComuniComponent } from './comuni/edit-comuni/edit-comuni.component';
import { EditFattureComponent } from './fatture/edit-fatture/edit-fatture.component';
import { DetailFattureComponent } from './fatture/detail-fatture/detail-fatture.component';
import { HomePageComponent } from './homePage/home-page/home-page.component';

const routes: Routes = [
  {path:"", component: LoginComponent},

  { path: "homePage", component: HomePageComponent, canActivate: [LoginGuard]},

  {path:"users", component: CustomersComponent, canActivate: [LoginGuard]},
  {path:"users/page/:page", component: CustomersComponent, canActivate: [LoginGuard]},
  

  {path:"newCustomer", component: AddCustomerComponent, canActivate: [LoginGuard]},

  {path:"detailCustomer", component: DetailCustomerComponent, canActivate: [LoginGuard]},
  {path:"detailCustomer/:id", component: DetailCustomerComponent, canActivate: [LoginGuard]},

  {path:"editCustomer", component: EditCustomerComponent, canActivate: [LoginGuard]},
  {path:"editCustomer/page/:id", component: EditCustomerComponent, canActivate: [LoginGuard]},


  {path:"province", component: ProvinceComponent, canActivate: [LoginGuard]},
  {path:"province/page/:page", component: ProvinceComponent, canActivate: [LoginGuard]},

  {path:"addProvince", component: AddProvinceComponent, canActivate: [LoginGuard]},
  {path:"editProvince", component: EditProvinceComponent, canActivate: [LoginGuard]},
  {path:"editProvince/page/:id", component: EditProvinceComponent, canActivate: [LoginGuard]},


  {path:"comuni",component: ComuniComponent, canActivate: [LoginGuard]},
  {path:"comuni/page/:page",component: ComuniComponent, canActivate: [LoginGuard]},

  {path:"addComuni", component: AddComuniComponent, canActivate: [LoginGuard]},
  {path:"editComuni", component: EditComuniComponent, canActivate: [LoginGuard]},
  {path:"editComuni/page/:id", component: EditComuniComponent, canActivate: [LoginGuard]},


  {path:"fatture", component: FattureComponent, canActivate: [LoginGuard]},
  {path:"fatture/page/:page", component: FattureComponent, canActivate: [LoginGuard]},

  {path:"addFatture", component: AddFattureComponent, canActivate: [LoginGuard]},
  {path:"editFatture", component: EditFattureComponent, canActivate: [LoginGuard]},
  {path:"editFatture/page/:id", component: EditFattureComponent, canActivate: [LoginGuard]},

  {path:"detailFatture", component: DetailFattureComponent, canActivate: [LoginGuard]},
  {path:"detailFatture/:id", component: DetailFattureComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
