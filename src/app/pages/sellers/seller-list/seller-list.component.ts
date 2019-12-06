import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddsellerdialogComponent } from 'src/app/pages/addsellerdialog/addsellerdialog.component';
import { Dial1Component } from 'src/app/pages/dial1/dial1.component';
import { DeleteSellerDiaComponent} from 'src/app/pages/delete-seller-dia/delete-seller-dia.component';
import { UploadProductLinkDiaComponent } from 'src/app/pages/upload-product-link-dia/upload-product-link-dia.component'
import { MatIcon } from '@angular/material';
// import seller_data from 'src/assets/data/sellers_data.json';
import { filter } from 'rxjs/internal/operators';
import { SellersService } from '../sellers.service';
import { Seller } from '../seller';
import {ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SellerListComponent implements OnInit {
  // public Seller: {id: number, name: string}[] = seller_data;
  // seller: any;
  sellers: Seller[];
  editSeller: Seller;
  isLoading = true;
  constructor(public dialog: MatDialog, private sellerService: SellersService) { }

  ngOnInit() {
    this.getCompetitors();
  }

  getCompetitors() {
    this.sellerService.getCompetitors().subscribe(data => {
      this.sellers = data;
      this.isLoading = false;
    });
  }

  // deleteSeller(seller: Seller) {
  //   event.preventDefault();
  //   this.sellers = this.sellers.filter(s => s !== seller);
  //   console.log(seller.id);
  //   this.sellerService.deleteCompetitor(seller.id).subscribe();
  // }

  gotoStore(seller: Seller) {
    event.preventDefault();
    window.location.assign(seller.url);
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(Dial1Component,
       {width: '486px',
        // height: '290px',
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addsellerDialog() {
    const addsellerdialogRef = this.dialog.open(AddsellerdialogComponent,
      {
        width: '380px',
        // height: '259px',
      });
    addsellerdialogRef.afterClosed().pipe(
      filter(name => name)
      ).subscribe(result => {
        this.sellers.push(result);
    });
  }
  deleteSellerDialog(id) {
    // event.preventDefault();
    const deleteSellerDiaRef = this.dialog.open(DeleteSellerDiaComponent, {
      width: '546.72px',
      data: { id }
    });
    deleteSellerDiaRef.afterClosed().subscribe(result => {
      console.log('dialog closed:', result.id);
    });
    this.sellers = this.sellers.filter(s => s.id !== id);

}
  uplaodProductLinkDialog(id) {
    const uploadProductLinkDiaRef = this.dialog.open(UploadProductLinkDiaComponent, {
      width: '412.14px',
      data: { id } 
    });
    uploadProductLinkDiaRef.afterClosed().pipe().subscribe(resp => {
      console.log('exit');
    });
  }

}
