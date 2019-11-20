import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddBrandDiaComponent} from 'src/app/pages/add-brand-dia/add-brand-dia.component';
import {AddProductDiaComponent} from 'src/app/pages/add-product-dia/add-product-dia.component';
import brand_data from 'src/assets/data/brands_data.json';
import { filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  public Brand: {id: string, name: string}[] = brand_data;
  brand:any
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddBrand(): void{
    const brandRef = this.dialog.open(AddBrandDiaComponent,
      {width: '303.28px',
       height: '226px',
     });
   brandRef.afterClosed().pipe(
    filter(name => name)
  ).subscribe(name => {
    this.Brand.push({ name, id: ''});
  });
  }
  
  openAddProduct(): void{
    const productRef = this.dialog.open(AddProductDiaComponent,
      {
        width: '510px',
        height: '346px',
      });
    productRef.afterClosed().pipe(filter(name => name)).subscribe(name => this.brand.push({
      name, id: this.Brand[length-1].id + 1
    }));
    
  }
}

