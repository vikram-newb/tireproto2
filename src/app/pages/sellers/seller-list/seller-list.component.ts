import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddsellerdialogComponent } from 'src/app/pages/addsellerdialog/addsellerdialog.component';
import { Dial1Component } from 'src/app/pages/dial1/dial1.component';
import { MatIcon } from '@angular/material';
import seller_data from 'src/assets/data/sellers_data.json';
import { filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  public Seller: {id: number, name: string}[] = seller_data;
  seller: any;
  // public sellers = [
  //   {
  //     id: 1,
  //     name: 'Buy Wheels Today'
  //   },
  //   {
  //     id: 2,
  //     name: 'IFixItZone'
  //   }
  // ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Dial1Component,
       {width: '486px',
        height: '290px',
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  addsellerDialog() {
    const addsellerdialogRef = this.dialog.open(AddsellerdialogComponent,
      {
        width: '380px',
        height: '259px',
      });
    addsellerdialogRef.afterClosed().pipe(filter(name => name)).subscribe(name => {
      const id = this.Seller[this.Seller.length - 1].id ++;
      this.Seller.push({
      name,
      id
    });
    });
  }
}
