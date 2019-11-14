import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsRoutingModule } from './brands-routing.module';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [BrandListComponent, BrandDetailComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    MaterialModule
  ]
})
export class BrandsModule { }
