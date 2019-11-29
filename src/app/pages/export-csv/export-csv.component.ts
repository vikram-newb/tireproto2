import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.css']
})
export class ExportCsvComponent implements OnInit {

  constructor(public brandsService: BrandsService,
    public productRef: MatDialogRef<ExportCsvComponent>) { }

  ngOnInit() {
  }

}
