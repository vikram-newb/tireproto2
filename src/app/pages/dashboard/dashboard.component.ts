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
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ExportCsvComponent } from 'src/app/pages/export-csv/export-csv.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;
  brand = [];
  brandArray = [];
  brandId = '11';
  isToggled = false;
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

  
  modifyTable() {
    this.isToggled = !this.isToggled;
    if (this.isToggled) {
      this.displayedColumns = ['Sku', 'ProductName', 'OurPrice', 'Quantity', 'SellerPrice', 'SellerSold'];
    } else {
      this.displayedColumns = ['Sku', 'ProductName', 'OurPrice', 'Quantity'];
    }
  }

  ngOnInit() {
    this.brandservice.getBrands2().subscribe(resp =>{
      this.brandArray = [...resp];
    });

    this.form = this.formBuilder.group({
      brand : [null, []]
    });
    // console.log(this.form.value)
    // this.form.valueChanges.subscribe(value => console.log(value.brand.id));
    this.form.get('brand').valueChanges.subscribe(value => { 
      this.getDashBrand(value.id)
    });
    console.log(this.isLoading)
    
  }

exportAsCsv(){
  const exportCsvRef = this.dialog.open(ExportCsvComponent, {
    width: '482.29px',
    // height: '217px'
  });
  exportCsvRef.afterClosed().pipe().subscribe(result =>{
    console.log('exit');
  });
}

getDashBrand(id: string) {
  this.brandservice.dashBrandProduct(id).subscribe(resp => {
    this.dashArray = resp['RowData']
    console.log(this.dashArray)
    this.isLoading = false;
  });

  }
}

