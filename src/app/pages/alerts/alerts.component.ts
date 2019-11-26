import { Component, OnInit } from '@angular/core';
import All_data from 'src/assets/data/alerts_all.json';
import Read_data from 'src/assets/data/alerts_read.json';
import Unread_data from 'src/assets/data/alerts_unread.json';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})

export class AlertsComponent implements OnInit {



  dif: any;
  dif2: any;
  public All: any = All_data.data;
  public Read: any = Read_data.data;
  public Unread: any = Unread_data.data;

  // {id:string, skuId: string, competitorLink: object, competitorId: number, oldPrice: number, newPrice: number }[]

  constructor() {

   }
  ngOnInit() {
  }

}
