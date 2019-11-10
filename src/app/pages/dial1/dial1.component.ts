import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../sellers/sellers.component';
@Component({
  selector: 'app-dial1',
  templateUrl: './dial1.component.html',
  styleUrls: ['./dial1.component.css']
})
export class Dial1Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Dial1Component>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {

  }

}
