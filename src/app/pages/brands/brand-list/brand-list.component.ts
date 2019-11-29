import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddBrandDiaComponent} from 'src/app/pages/add-brand-dia/add-brand-dia.component';
import {AddProductDiaComponent} from 'src/app/pages/add-product-dia/add-product-dia.component';
// import brand_data from 'src/assets/data/brands_data.json';
import { filter } from 'rxjs/internal/operators';
import {BrandsService } from '../brands.service';
import { Brand } from '../brand';
import { UploadCsvComponent } from '../../upload-csv/upload-csv.component';
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  // public Brand: {id: string, name: string}[] = brand_data;
  // brand: any;
  brands: Brand[];
  isLoading = true;
  editBrand: Brand; // the brand currently being edited
  constructor(public dialog: MatDialog, private brandService: BrandsService) { }

  ngOnInit() {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe(data =>{
      this.brands = data
      this.isLoading = false;
    });
    
    // getBrands().subscribe(brands => (this.brands = brands));
  }

  delete(brand: Brand) {
    event.preventDefault();
    this.brands = this.brands.filter(b => b !== brand);
    console.log(brand.id);
    this.brandService.deleteBrand(brand.id).subscribe();
  }

  edit(brand: Brand) {
    this.editBrand = brand;
  }

  openAddBrand() {
    const brandRef = this.dialog.open(AddBrandDiaComponent,
      {
       width: '303.28px',
       height: '226px',
     });
    brandRef.afterClosed().pipe(
    filter(name => name)
  ).subscribe(result => {
      this.brands.push(result);
  });
}
  openAddProduct() {
    const productRef = this.dialog.open(AddProductDiaComponent,
      {
        width: '510px',
        height: '346px',
      });
    productRef.afterClosed().pipe(
      filter(brandId => brandId)
      ).subscribe(result => {
        console.log('exit');
      });
  }

  openUploadProduct() {
    const uploadRef =this.dialog.open(UploadCsvComponent,{
      width:'346.7px',
      height: '253px'
    });
    uploadRef.afterClosed().pipe().subscribe(result =>{
      console.log('exit');
    });
  }
}
