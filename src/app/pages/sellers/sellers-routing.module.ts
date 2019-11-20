import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerDetailComponent } from './seller-detail/seller-detail.component';
import { SellerListComponent } from './seller-list/seller-list.component';

const routes: Routes = [
  {
    path: '',
    component: SellerListComponent
  },
  {
    path: ':id',
    component: SellerDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
