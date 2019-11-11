import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-dial1',
  templateUrl: './dial1.component.html',
  styleUrls: ['./dial1.component.css']
})
export class Dial1Component implements OnInit {
  constructor( public dialogRef: MatDialogRef<Dial1Component>) { }

  ngOnInit() {}
}
