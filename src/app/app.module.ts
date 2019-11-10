import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { SellersComponent } from './pages/sellers/sellers.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { HeaderComponent } from './static/header/header.component';
import { Dial1Component } from './pages/dial1/dial1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BrandsComponent,
    SellersComponent,
    AlertsComponent,
    HeaderComponent,
    Dial1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  entryComponents: [Dial1Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
