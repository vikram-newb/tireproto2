import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms'

@Component({
  selector: 'app-add-product-dia',
  templateUrl: './add-product-dia.component.html',
  styleUrls: ['./add-product-dia.component.css']
})
export class AddProductDiaComponent implements OnInit {

  constructor(public productRef: MatDialogRef<AddProductDiaComponent>) { }

  ngOnInit() {
  }

}
