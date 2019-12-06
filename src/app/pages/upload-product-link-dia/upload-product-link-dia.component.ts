import { Component, OnInit, Inject} from '@angular/core';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SellersService } from 'src/app/pages/sellers/sellers.service';
import {SellerProduct} from 'src/app/pages/sellers/sellerProduct';
@Component({
  selector: 'app-upload-product-link-dia',
  templateUrl: './upload-product-link-dia.component.html',
  styleUrls: ['./upload-product-link-dia.component.css']
})
export class UploadProductLinkDiaComponent implements OnInit {
  constructor(public sellerService: SellersService,
              public uploadProductLinkDiaRef: MatDialogRef<UploadProductLinkDiaComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onFileSelect(event) {
    if (event.target.file.length > 0) {
      const file = event.target.files[0];

     }
  }
  onUpload(sp: SellerProduct[]) {
    this.sellerService.uploadProductLink(this.data.id).subscribe(resp => {
      console.log(resp);
    });
  }
}
