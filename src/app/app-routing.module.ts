import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent} from './static/header/header.component';
import { AuthGuard } from './auth.guard';
import { SellersModule } from './pages/sellers/sellers.module';
import { BrandsModule } from './pages/brands/brands.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { data: { title: 'Dashboard' },
    path: 'header',
    component: HeaderComponent,
    // canActivate: [AuthGuard], !! uncomment this this for auth guard to activate
    children: [
      {
        data: {title: 'Dashboard'},
        path: 'dashboard',
        component: DashboardComponent
      },
      {
       data: {title: 'Brands'},
       path: 'brands',
       loadChildren: () => import('./pages/brands/brands.module').then(m => m.BrandsModule)
      },
      {
      data: {title: 'Sellers'},
      path: 'sellers',
      loadChildren: () => import('./pages/sellers/sellers.module').then(n => n.SellersModule)
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
