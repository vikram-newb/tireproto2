import { Component, OnInit, Input } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import BWT_data from 'src/assets/data/BuyWheelsToday.json';
import Ifix_data from 'src/assets/data/IFixItZone.json';
import {SellersService} from '../sellers.service';
import {SellerProduct} from '../sellerProduct';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-seller-detail',
  templateUrl: './seller-detail.component.html',
  styleUrls: ['./seller-detail.component.css']
})
export class SellerDetailComponent implements OnInit {
  isLoading = 'true';
  tabs = ['Under Process', 'Perfectly Parsed', 'Price Not Found' , 'MPN not Found', 'Listing not Found', 'Error in Parsing' ];
  selected = new FormControl(0, null);


  // public Seller: {id: string, name: string}[] = seller_data;


  // public BuyWheelsToday: {id: string, brand: string, quantity: number, price: number, url: string}[] = BWT_data;
  // public IFixItZone: {id: string, brand: string, quantity: number, price: number, url: string}[] = Ifix_data;
  id: string ;
  displayedColumns: string[] = ['id', 'brand', 'quantity', 'price', 'url'];
  dataSource1: SellerProduct[];
  dataSource2: SellerProduct[];
  constructor(public sellerService: SellersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
     this.sellerService.getCompetitorProduct(this.id).subscribe(data => {
       this.isLoading = 'false';
       this.dataSource1 = data;
      //  this.dataSource1.forEach( resp => {
      //     resp.status = 4
      //     console.log(resp);
      //  })

      });
  }

  tabSelected(index) {
   this.dataSource2 = this.dataSource1.filter(b =>  b.status === index);
   console.log(this.dataSource2);
  }

}
