import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import { Brand } from '../brands/brand';
import { BrandProduct } from '../brands/brandProduct';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-product-dia',
  templateUrl: './add-product-dia.component.html',
  styleUrls: ['./add-product-dia.component.css']
})
export class AddProductDiaComponent implements OnInit {
  form: FormGroup;
  brand = [];
  brandArray = [];
  brandMap = {};
  id: string;
  constructor(public formBuilder: FormBuilder,
              public brandService: BrandsService ,
              public productRef: MatDialogRef<AddProductDiaComponent>) { }

  ngOnInit() {
    this.brandService.getBrands()
    .subscribe(resp => {
      this.brandArray = [...resp];
        // resp.forEach(data => {
        // this.brandArray.push(data.name);
        // this.brandMap[data.id] = data.name;
      // });
    });
    this.form = this.formBuilder.group({
      // mpn: new FormControl(''),
      // description: new FormControl(''),
      skuId: new FormControl(''),
      desc: new FormControl(''),
      brand: new FormControl(null)
    });
  }

  submit(form) {
    const mpn = this.form.value.skuId;
    const description = this.form.value.desc;

    // console.log(skuId, desc);
    // console.log('works uptil here');
    // console.log(this.form.value.brand.id);
    if (this.form.invalid) {
      return;
    }


    // console.log(this.brandMap.id);
    console.log(this.form.value.brand.id);
    if (!mpn && !description) {
      console.log('reahed here');
      return false;
    }
    const newProduct: any = {
      skuId: mpn,
      brandId: this.form.value.brand.id,
      desc: description
    };
    console.log(newProduct);
    console.log('condition successful');
    // this.brandService.createBrandProduct(newProduct).subscribe();
    this.brandService.addProduct(newProduct).subscribe(resp => console.log(resp));
    this.productRef.close();
  }


  // onClose() {
  //   this.productRef.close(false);
  // }

}
