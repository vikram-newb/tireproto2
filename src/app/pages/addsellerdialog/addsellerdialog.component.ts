import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
// import seller_list from 'src/assets/data/sellers_data.json';

import { SellersService } from 'src/app/pages/sellers/sellers.service';
import { Seller } from '../sellers/seller';
@Component({
  selector: 'app-addsellerdialog',
  templateUrl: './addsellerdialog.component.html',
  styleUrls: ['./addsellerdialog.component.css']
})
export class AddsellerdialogComponent implements OnInit {
  form: FormGroup;
  sellers: Seller[] = [];
  editSeller: Seller;
  name: Seller;
  // public Sellers: any = seller_list;
  constructor(private formBuilder: FormBuilder,
              public addsellerdialogRef: MatDialogRef<AddsellerdialogComponent>,
              public sellerService: SellersService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      // sellername: new FormControl(''),
      // storeLink: new FormControl('')
      name: new FormControl(''),
      url: new FormControl('')
    });
  }

  submit(form) {
    const sella  = this.form.value.name;
    const sellaurl = this.form.value.url;
    if ( !sella) {
      return false;
    }

    const newSeller: any = {
      name: sella,
      url: sellaurl
    };
    this.sellerService.addCompetitor(newSeller).subscribe(data => {
      this.closeDialog(data);
    });
  }
  closeDialog(data) {
    this.addsellerdialogRef.close(data);
  }
  }

