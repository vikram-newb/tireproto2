import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersRoutingModule } from './sellers-routing.module';
import { SellerDetailComponent } from './seller-detail/seller-detail.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { MaterialModule } from 'src/app/material/material.module';
@NgModule({
  declarations: [SellerDetailComponent, SellerListComponent],
  imports: [
    CommonModule,
    SellersRoutingModule,
    MaterialModule
  ]
})
export class SellersModule { }
