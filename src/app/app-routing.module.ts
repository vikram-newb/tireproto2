import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { SellersComponent } from './pages/sellers/sellers.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent} from './static/header/header.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { data: {title: 'Dashboard'},
    path: 'header',
    component: HeaderComponent,
    canActivate: [AuthGuard],
    children: [
      {
        data: {title: 'Dashboard'},
        path: 'dashboard',
        component: DashboardComponent
      },
      {
       data: {title: 'Brands'},
       path: 'brands',
       component: BrandsComponent
      },
      {
      data: {title: 'Sellers'},
      path: 'sellers',
      component: SellersComponent
      },
      {
       data: {title: 'Alerts'},
       path: 'alerts',
       component: AlertsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
