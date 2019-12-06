import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder, Form} from '@angular/forms';
// import LionHart_db from 'src/assets/data/Dashboard_LionHart.json';
// import Thunderer_db from 'src/assets/data/Dashboard_Thunderer.json';
// import brands_db from 'src/assets/data/brands_data.json';
import { BrandsService } from '../brands/brands.service';
import { SellersService } from '../sellers/sellers.service';
import { DashboardBrandProduct } from './dashboardBrandProduct';
import { Brand } from '../brands/brand';
import { of } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExportCsvComponent } from 'src/app/pages/export-csv/export-csv.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  SellerId: number;
  flag:number;
  numOfSellers: number;
  sellName = [];
  finalName: string;
  form: FormGroup;
  brand = [];
  brandArray = [];
  sellerArray = [];
  finalArray = [];
  SellId: number;
  isToggled = true;
  isLoading = true;
  dashArray: DashboardBrandProduct[];
  // public Thunderer: any = Thunderer_db.RowData;
  // public LionHart: any = LionHart_db.RowData;
  // public brands: {id: number, name: string}[] = brands_db;
  displayedColumns: string[] = ['Sku', 'ProductName', 'OurPrice', 'Quantity', 'SellerPrice', 'SellerSold'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor(public brandservice: BrandsService,
              public sellerService: SellersService,
              public formBuilder: FormBuilder,
              public dialog: MatDialog) { }

  

  ngOnInit() {
    this.brandservice.getBrands2().subscribe(resp => {
      this.brandArray = [...resp];
      // console.log(this.brandArray);
      this.form.get('brand').setValue(resp[0]);
    });

    this.form = this.formBuilder.group({
      brand : [null, []]
    });
    this.form.get('brand').valueChanges.subscribe(value => {
      this.getDashBrand(value.id);
    });
    this.modifyTable();
  }

exportAsCsv() {
  const exportCsvRef = this.dialog.open(ExportCsvComponent, {
    width: '482.29px',
  });
  exportCsvRef.afterClosed().pipe().subscribe();
}

getDashBrand(id: string) {
  this.brandservice.dashBrandProduct(id).subscribe(resp => {
    this.dashArray = resp['RowData'];
    this.sellerArray = this.dashArray.filter(res => res.SellerInfo !== null);
    this.SellId = this.sellerArray.length > 0 ?  this.sellerArray[0].SellerInfo[0].SellerId : null ;
    this.numOfSellers = this.SellId != null ? this.sellerArray[0].SellerInfo.length : 0;
    // can use array.find;
    // console.log(this.sellerArray[0].SellerInfo[0].SellerId);
    this.isLoading = false;
    this.sellerService.getCompetitors().subscribe( result => {
      this.sellName = result.filter(item => {
        if (item.id === this.SellId) {
          this.finalName = item.name;
        }
      });
    });
    // const name = this.getSellerName(this.SellerId);
    // console.log(name)
  });

  }

  modifyTable() {
    this.displayedColumns = ['Sku', 'ProductName', 'OurPrice', 'Quantity'];
    this.isToggled = !this.isToggled;
    this.flag = this.numOfSellers;
    if (this.isToggled) {
      console.log(this.numOfSellers);
     
      while (this.flag > 0) {
        this.displayedColumns.push('SellerPrice', 'SellerSold');
        this.flag -=1;
      }
      // this.displayedColumns = ['Sku', 'ProductName', 'OurPrice', 'Quantity', 'SellerPrice', 'SellerSold'];
    } else {
      this.displayedColumns = ['Sku', 'ProductName', 'OurPrice', 'Quantity'];
    }
    
  }



}

