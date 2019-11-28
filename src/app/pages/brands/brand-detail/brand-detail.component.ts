import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ThundererData from 'src/assets/data/Thunderer.json';
import LionHartData from 'src/assets/data/LionHart.json';
import { filter } from 'rxjs/internal/operators';
import {BrandsService} from '../brands.service';
import {BrandProduct} from '../brandProduct';
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
  constructor(public brandService: BrandsService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.brandService.viewAllProductOfParticularBrand(this.id).subscribe(resp => console.log(resp));
    this.brandService.getAllProductsOfBrand(this.id).subscribe(data => this.dataSourceA = data);
    // console.log(this.dataSourceA.desc);
  }
  deleteProduct(bp) {
    event.preventDefault();
    this.dataSourceA = this.dataSourceA.filter(b => b.id !== bp);
    this.brandService.deleteProduct(bp).subscribe();
  }


  }


