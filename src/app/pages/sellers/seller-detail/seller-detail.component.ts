import { Component, OnInit, Input } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import BWT_data from 'src/assets/data/BuyWheelsToday.json';
import Ifix_data from 'src/assets/data/IFixItZone.json';
import {SellersService} from '../sellers.service';
import {SellerProduct} from '../sellerProduct';
@Component({
  selector: 'app-seller-detail',
  templateUrl: './seller-detail.component.html',
  styleUrls: ['./seller-detail.component.css']
})
export class SellerDetailComponent implements OnInit {

  // public Seller: {id: string, name: string}[] = seller_data;


  public BuyWheelsToday: {id: string, brand: string, quantity: number, price: number, url: string}[] = BWT_data;
  public IFixItZone: {id: string, brand: string, quantity: number, price: number, url: string}[] = Ifix_data;
  id: string ;
  displayedColumns: string[] = ['id', 'brand', 'quantity', 'price', 'url'];
  dataSource1: SellerProduct[];
  constructor(public sellerService: SellersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
     this.sellerService.getCompetitorProduct(this.id).subscribe(data => this.dataSource1 = data);
       this.sellerService.getCompetitorProduct(this.id).subscribe(data => console.log(data));

    //  this.dataSource1 = this.id === '13' ? this.BuyWheelsToday : this.IFixItZone;
  }

}
