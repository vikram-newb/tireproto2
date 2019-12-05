import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BrandsService } from 'src/app/pages/brands/brands.service';
import { Brand } from '../brands/brand';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-brand-dia',
  templateUrl: './delete-brand-dia.component.html',
  styleUrls: ['./delete-brand-dia.component.css']
})
export class DeleteBrandDiaComponent implements OnInit {

  constructor(public brandService: BrandsService,
              public deleteBrandRef: MatDialogRef<DeleteBrandDiaComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  deleteBrand(brand: Brand[]) {
    this.brandService.deleteBrand(this.data.id).subscribe(data => {
      this.closeDialog(data);
    });
    this._snackBar.open('Brand Deleted','Successfully', {
      duration:2000,
    });
  }
  closeDialog(data) {
    this.deleteBrandRef.close(data);
  }
}
