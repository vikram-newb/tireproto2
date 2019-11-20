import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import seller_list from 'src/assets/data/sellers_data.json';
@Component({
  selector: 'app-addsellerdialog',
  templateUrl: './addsellerdialog.component.html',
  styleUrls: ['./addsellerdialog.component.css']
})
export class AddsellerdialogComponent implements OnInit {
  form: FormGroup;
  public Sellers: any = seller_list;
  constructor(private formBuilder: FormBuilder, public addsellerdialogRef: MatDialogRef<AddsellerdialogComponent>) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sellername: new FormControl(''),
      StoreLink: new FormControl('')
    });
  }

  submit(form) {
    this.addsellerdialogRef.close(`${form.value.sellername}`);
  }

}
