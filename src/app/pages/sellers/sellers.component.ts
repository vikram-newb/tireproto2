import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dial1Component } from '../dial1/dial1.component';
import { AddsellerdialogComponent } from '../addsellerdialog/addsellerdialog.component';
import { filter } from 'rxjs/internal/operators';
@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {
  seller: any;

  constructor(public dialog: MatDialog) {
  }

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
    addsellerdialogRef.afterClosed().pipe(filter(name => name)).subscribe(name => this.seller.push({
      name, content: ''
    }));
  }

}
