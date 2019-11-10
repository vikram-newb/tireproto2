import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor() { }
  simp() {
    console.log('home');
  }
  ngOnInit() {
  }

}
