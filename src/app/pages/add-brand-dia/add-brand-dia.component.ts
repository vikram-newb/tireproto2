import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
// import brands_list from 'src/assets/data/brands_data.json';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import { Brand } from '../brands/brand';


@Component({
  selector: 'app-add-brand-dia',
  templateUrl: './add-brand-dia.component.html',
  styleUrls: ['./add-brand-dia.component.css']
})
export class AddBrandDiaComponent implements OnInit {
  // id: number;
  form: FormGroup;
  brands: Brand[] = [];
  editBrand: Brand;
  name: Brand;
  // public Brands: any = brands_list;
  constructor(public formBuilder: FormBuilder,
              public brandService: BrandsService ,
              public brandRef: MatDialogRef<AddBrandDiaComponent>) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('')
    });
  }

submit(form) {
  const para = this.form.value.name;
  if ( !para) {
    return false;
  }
  const newBrand: any = {
    name : para
  };
  this.brandService.addBrand(newBrand).subscribe(data => {
    this.closeDialog(data);
  });
}
closeDialog(data) {
  this.brandRef.close(data);
}
}


