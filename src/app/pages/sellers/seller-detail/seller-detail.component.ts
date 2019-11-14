import { Component, OnInit, Input } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import BWT_data from 'src/assets/data/BuyWheelsToday.json';
import Ifix_data from 'src/assets/data/IFixItZone.json';
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
  dataSource1: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
     this.dataSource1 = this.id === '13' ? this.BuyWheelsToday : this.IFixItZone;
  }

}
