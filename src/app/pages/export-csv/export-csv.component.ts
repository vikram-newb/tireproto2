import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'; 
import { Seller } from '../sellers/seller';
import { SellersService } from '../sellers/sellers.service';

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.css']
})
export class ExportCsvComponent implements OnInit {
  competitorId: any;
  seller: Seller[];
  sellerArray = [];
  form: FormGroup;
  pl = {"competitorids":[12],"brandId":10}

  constructor(public sellerService: SellersService,
    public formBuilder: FormBuilder,
    public brandService: BrandsService,
    public productRef: MatDialogRef<ExportCsvComponent>) {
      this.form = this.formBuilder.group({
        seller: [null, []],
      });
     }

  ngOnInit() {
    this.sellerService.getCompetitors().subscribe(resp => {
      this.sellerArray = [...resp];
      console.log(resp);
    })

    this.form.get('seller').valueChanges.subscribe(value =>{
      this.competitorId = value.id;
      console.log(this.competitorId);
      // this.pl.sellerId = value.id;
      console.log(value);
    })
  }
  downloadCSV() {
    this.brandService.exportCSV(this.pl).subscribe(data => 
      this.downloadFile(data))
  }
  downloadFile(data:any){
    const blob = new Blob([data], { type: 'text/csv' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }

}
