import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SellersModule } from './pages/sellers/sellers.module';
import { BrandsModule } from './pages/brands/brands.module';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { HeaderComponent } from './static/header/header.component';
import { Dial1Component } from './pages/dial1/dial1.component';
import { AddsellerdialogComponent } from './pages/addsellerdialog/addsellerdialog.component';
import { AuthGuard } from './auth.guard';
import { AddBrandDiaComponent} from './pages/add-brand-dia/add-brand-dia.component';
import { AddProductDiaComponent} from './pages/add-product-dia/add-product-dia.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AlertsComponent,
    HeaderComponent,
    Dial1Component,
    AddsellerdialogComponent,
    AddBrandDiaComponent,
    AddProductDiaComponent,
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
  entryComponents: [Dial1Component,
    AddsellerdialogComponent, AddBrandDiaComponent,
    AddProductDiaComponent,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
