import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import { BrandProduct } from '../brands/brandProduct';
@Component({
  selector: 'app-delete-brand-product-dia',
  templateUrl: './delete-brand-product-dia.component.html',
  styleUrls: ['./delete-brand-product-dia.component.css']
})
export class DeleteBrandProductDiaComponent implements OnInit {

  constructor(public brandService: BrandsService,
              public deleteBrandProductRef: MatDialogRef<DeleteBrandProductDiaComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  deleteBrandProduct(brandProduct: BrandProduct[]) {
    console.log(this.data.id);
    // this.brandService.deleteProduct(this.data.id).subscribe(data => {
    //   this.closeDialog(data);
    // });
    this.brandService.deleteProduct(this.data.id).subscribe(data => {
      this.closeDialog(data);
    });
  }
  closeDialog(data) {
    this.deleteBrandProductRef.close(data);
  }
}
