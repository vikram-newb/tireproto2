import { Component, OnInit } from '@angular/core';
import brand_data from 'src/assets/data/brands_data.json';
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  public Brand: {id: string, name: string}[] = brand_data;
  constructor() { }

  ngOnInit() {
  }

}
