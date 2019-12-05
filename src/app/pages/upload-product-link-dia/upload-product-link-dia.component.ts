import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import { MatDialogRef } from '@angular/material';
import { SellersService } from 'src/app/pages/sellers/sellers.service';

@Component({
  selector: 'app-upload-product-link-dia',
  templateUrl: './upload-product-link-dia.component.html',
  styleUrls: ['./upload-product-link-dia.component.css']
})
export class UploadProductLinkDiaComponent implements OnInit {

  constructor(public sellerService: SellersService,
              public uploadProductLinkDiaRef: MatDialogRef<UploadProductLinkDiaComponent>) { }

  ngOnInit() {
  }

  onFileSelect(event) {
    if (event.target.file.length > 0) {
      const file = event.target.files[0];

     }
  }
  onUpload() {
    console.log('basic');
  }
}
