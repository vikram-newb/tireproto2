import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import LionHart_db from 'src/assets/data/Dashboard_LionHart.json';
import Thunderer_db from 'src/assets/data/Dashboard_Thunderer.json';
import brands_db from 'src/assets/data/brands_data.json';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  tableControl = new FormControl('', [Validators.required]);
  currentBrand : any;
  isToggled = false;
  public Thunderer: any = Thunderer_db.RowData;
  public LionHart: any = LionHart_db.RowData;
  public brands: {id: number, name: string}[] = brands_db;
  displayedColumns: string[] = ['Sku', 'ProductName', 'OurPrice', 'Quantity', 'SellerPrice', 'SellerSold'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor() { }

  // {Sku: string, ProductName: string, OurPrice: number, Quantity: number, SellerInfo:object}[]
  
  modifyTable(){
    this.isToggled = !this.isToggled;
    if (this.isToggled){
      // this.addColumn();
      this.displayedColumns = ['Sku', 'ProductName', 'OurPrice', 'Quantity', 'SellerPrice', 'SellerSold'];
    }
    else{
      
      this.displayedColumns = ['Sku', 'ProductName', 'OurPrice', 'Quantity'];
      // this.removeColumn();
    }
  }

  // addColumn() {
    
  //   this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  // }

  // removeColumn() {
  //   if (this.columnsToDisplay.length) {
  //     this.columnsToDisplay.pop();
  //   }
  // }

  
  ngOnInit() { 
    this.tableControl.valueChanges.subscribe(brand => {
      this.currentBrand = (brand.name == "Lionhart") ?  this.LionHart : this.Thunderer; 
      this.currentBrand.forEach(element => {
        console.log(element.SellerInfo)
      });
    })
  }
}
