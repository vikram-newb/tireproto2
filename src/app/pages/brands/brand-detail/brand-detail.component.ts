import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ThundererData from 'src/assets/data/Thunderer.json';
import LionHartData from 'src/assets/data/LionHart.json';
@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {
  public ThunererTrackGrip: {id: string, desc: string}[] = ThundererData;
  public LionHart: {id: string, desc: string }[] = LionHartData;
  id: string;
  displayedColumns: string[] = ['id', 'desc'];
  dataSourceA: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataSourceA = this.id === '10' ? LionHartData : ThundererData;
  }

}
