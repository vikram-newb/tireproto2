import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { SellersComponent } from './pages/sellers/sellers.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent} from './static/header/header.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'header',
    component: HeaderComponent,
    children: [
      { path: 'dashboard',
        component: DashboardComponent
      },
      {
       path: 'brands',
        component: BrandsComponent
      },
      {
      path: 'sellers',
      component: SellersComponent
      },
      {
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
