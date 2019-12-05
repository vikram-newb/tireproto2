import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import {FormControl, Validators, FormGroup, FormBuilder, Form} from '@angular/forms'; 
import { Brand } from '../brands/brand';
@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCsvComponent implements OnInit {
  brandId: any;
  brand: Brand[];
  brandArray = [];
  form: FormGroup;

  constructor(public brandsService: BrandsService,
              public formBuilder: FormBuilder,
              public uploadRef: MatDialogRef<UploadCsvComponent>) { 
                this.form = this.formBuilder.group({
                  brand: [null, []],
                  profile: [' ']
                });
              }

  ngOnInit() {
    this.brandsService.getBrands2().subscribe( resp =>{
      this.brandArray = [...resp];
      console.log(resp);

    });

    this.form.get('brand').valueChanges.subscribe(value => {
      this.brandId = value.id;
      console.log(this.brandId);
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.form.get('profile').setValue(file);
    }
  }
  onUpload() {
    const formData = new FormData();
    formData.append('file', this.form.get('profile').value);
    this.brandsService.uploadCsv(this.brandId, formData).subscribe(resp => {
      this.closeDialog(resp);
    });
    // this.brandsService.uploadCsv().subscribe();
  }
  closeDialog(resp) {
    this.uploadRef.close(resp);
  }
}
