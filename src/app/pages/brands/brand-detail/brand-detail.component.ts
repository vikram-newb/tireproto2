import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import ThundererData from 'src/assets/data/Thunderer.json';
// import LionHartData from 'src/assets/data/LionHart.json';
import { DeleteBrandProductDiaComponent} from 'src/app/pages/delete-brand-product-dia/delete-brand-product-dia.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { filter } from 'rxjs/internal/operators';
import { BrandsService } from '../brands.service';
import { BrandProduct } from '../brandProduct';
@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {
  // public ThunererTrackGrip: {id: string, desc: string}[] = ThundererData;
  // public LionHart: {id: string, desc: string }[] = LionHartData;
  id: string;
  displayedColumns: string[] = ['id', 'desc'];
  dataSourceA: BrandProduct[];
  choosenBrandId ;
  constructor(public brandService: BrandsService,
              private route: ActivatedRoute,
              private dialog: MatDialog) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.brandService.viewAllProductOfParticularBrand(this.id).subscribe(resp => console.log(resp));
    this.brandService.getAllProductsOfBrand(this.id).subscribe(data => this.dataSourceA = data);
    // console.log(this.dataSourceA.desc);
  }
  // deleteProduct(bp) {
  //   event.preventDefault();
  //   this.dataSourceA = this.dataSourceA.filter(b => b.id !== bp);
  //   this.brandService.deleteProduct(bp).subscribe();
  // }

  deleteBrandProduct(id) {
    const deleteBrandProductRef = this.dialog.open(DeleteBrandProductDiaComponent, {
      width: '401.91px',
      data: {id}
    });
    deleteBrandProductRef.afterClosed().pipe().subscribe(result => {
      console.log('exit', id);
    });
    this.dataSourceA = this.dataSourceA.filter(b => b.id !== id);
  }

  }
