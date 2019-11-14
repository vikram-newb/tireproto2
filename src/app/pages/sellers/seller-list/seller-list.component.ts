import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material';
import seller_data from 'src/assets/data/sellers_data.json';
@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  public Seller: {id: string, name: string}[] = seller_data;
  // public sellers = [
  //   {
  //     id: 1,
  //     name: 'Buy Wheels Today'
  //   },
  //   {
  //     id: 2,
  //     name: 'IFixItZone'
  //   }
  // ];

  constructor() { }

  ngOnInit() {

  }

}
