import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SellersService } from 'src/app/pages/sellers/sellers.service';
// import { BrandsService } from 'src/app/pages/brands/brands.service';
import { Seller } from '../sellers/seller';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-delete-seller-dia',
  templateUrl: './delete-seller-dia.component.html',
  styleUrls: ['./delete-seller-dia.component.css']
})
export class DeleteSellerDiaComponent implements OnInit {
  

  sellers: Seller[];

  constructor(public deleteSellerDiaRef: MatDialogRef<DeleteSellerDiaComponent>,
              @Inject(MAT_DIALOG_DATA) public data ,
              public sellerService: SellersService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  deleteSeller(seller: Seller[]) {
    this.sellerService.deleteCompetitor(this.data.id).subscribe(data => {
      this.closeDialog(data);
    });
    this._snackBar.open('Seller Deleted', 'succesfully',{
      duration: 2000,
    });
  }
  closeDialog(data) {
    this.deleteSellerDiaRef.close(data);
  }

}
