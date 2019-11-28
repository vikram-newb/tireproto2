import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { SellersService } from 'src/app/pages/sellers/sellers.service';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import { Brand } from '../brands/brand';
import { Seller } from '../sellers/seller';
@Component({
  selector: 'app-dial1',
  templateUrl: './dial1.component.html',
  styleUrls: ['./dial1.component.css']
})
export class Dial1Component implements OnInit {
  form: FormGroup;
  brand = [];
  seller = [];
  sellerArray = [];
  brandArray = [];
  constructor( public dialogRef: MatDialogRef<Dial1Component>,
               public sellerService: SellersService,
               public formBuilder: FormBuilder,
               public brandService: BrandsService) { }

  ngOnInit() {
    this.sellerService.getCompetitors()
    .subscribe(resp => {
       this.sellerArray = [...resp];
       console.log(resp);
    });
    this.brandService.getBrands()
    .subscribe(resp => {
      this.brandArray = [...resp];
      console.log(resp);
    });
    this.form = this.formBuilder.group({
      BrandId: new FormControl(null),
      Url: new FormControl(''),
      competitorId: new FormControl(null)
    });
  }
  submit(form) {
    const url = this.form.value.Url;
    if (this.form.invalid) {
      return false;
    }

    const newLink: any = {
      competitorId: this.form.value.competitorId.id,
      Url: url,
      BrandId: this.form.value.BrandId.id
    }
    this.sellerService.addCompetitorProduct(newLink).subscribe(resp => console.log(resp));
    this.dialogRef.close();
  }
}
