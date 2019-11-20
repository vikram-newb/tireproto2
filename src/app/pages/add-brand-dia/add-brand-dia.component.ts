import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormsModule, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import brands_list from 'src/assets/data/brands_data.json' 
@Component({
  selector: 'app-add-brand-dia',
  templateUrl: './add-brand-dia.component.html',
  styleUrls: ['./add-brand-dia.component.css']
})
export class AddBrandDiaComponent implements OnInit {


  id: number;
  form: FormGroup;
  public Brands: any = brands_list;
  constructor(public formBuilder:FormBuilder, public brandRef: MatDialogRef<AddBrandDiaComponent>) { }

  

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('')
    });
  }
  submit(form){
    // this.Brands.push(this.name);
    // console.log('name');
    // this.id = this.Brands[length-1].id + 1;
    this.brandRef.close(`${form.value.name}`);
    console.log(`${form.value.name}`)
  }

}
