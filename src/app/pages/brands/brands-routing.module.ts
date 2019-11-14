import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';


const routes: Routes = [
  {path:'', component: BrandListComponent},
  {path:':id', component: BrandDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
