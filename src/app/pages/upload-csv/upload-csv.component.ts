import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCsvComponent implements OnInit {

  constructor(public brandsService: BrandsService,
                     public productRef: MatDialogRef<UploadCsvComponent>) { }

  ngOnInit() {
  }

}
