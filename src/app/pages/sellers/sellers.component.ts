import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dial1Component } from '../dial1/dial1.component';

export interface DialogData {
  sellers: any;
  brands: any;
}
@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {
  sellers: any;
  brands: any;


  constructor(public dialog: MatDialog) {
    this.sellers = ['Buy Wheels Today', 'IFixItZone'];
    this.brands = ['Thunderer Trac Grip', 'LionHart'];
  }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Dial1Component,
       {width: '486px',
        height: '290px',
        data: {}
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
