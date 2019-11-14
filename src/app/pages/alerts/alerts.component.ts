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
  // thundererAlerts: any;
  // lionAlerts: any;
  // priceAlert: any;
  // allAlert: any;


  dif: any;
  dif2: any;
  public All: {id:string, skuId: string, competitorLink: object,  competitorId: number, oldPrice: number, newPrice: number }[] = All_data.data;
  public Read: {id:string, skuId: string, competitorLink: object, competitorId: number, oldPrice: number, newPrice: number }[] = Read_data.data;
  public Unread: {id:string, skuId: string, competitorLink: object, competitorId: number, oldPrice: number, newPrice: number }[] = Unread_data.data;

  constructor() {
    
   }
  ngOnInit() {
  
    // this.priceAlert = [{
    //   mpn : 'TH2300',
    //   brand : 'Berserk',
    //   sellerName: 'kentaro Miura',
    //   oldPrice: '2530',
    //   newPrice: '3405',
    // }, {
    //   mpn : 'TH2300',
    //   brand : 'Stardust',
    //   sellerName: 'Araki',
    //   oldPrice: '2530',
    //   newPrice: '2990',
    // }, {
    //   mpn : 'TH2300',
    //   brand : '21st Century Boys',
    //   sellerName: 'Naoki Urasava',
    //   oldPrice: '1566',
    //   newPrice: '9876',
    // }];
    // this.allAlert = [
    //   {
    //     mpn : 'TH2300',
    //     brand : 'Stardust',
    //     sellerName: 'Araki',
    //     oldPrice: '2530',
    //     newPrice: '2990',
    //   },
    //   {
    //     mpn : 'TH2300',
    //     brand : 'StoneOcean',
    //     sellerName: 'Araki',
    //     oldPrice: '5230',
    //     newPrice: '2990',
    //   },
    //   {
    //     mpn : 'TH2300',
    //     brand : 'steelBallrun',
    //     sellerName: 'Araki',
    //     oldPrice: '2430',
    //     newPrice: '4990',
    //   },
    //   {
    //     mpn : 'TH2300',
    //     brand : 'Bleach',
    //     sellerName: 'kishimoto',
    //     oldPrice: '2530',
    //     newPrice: '2990',
    //   },
    //   {
    //     mpn : 'TH2300',
    //     brand : 'Hunter x Hunter',
    //     sellerName: 'togashi',
    //     oldPrice: '2530',
    //     newPrice: '2990',
    //   },
    // ];
  }
  // isAllGreater(entry): boolean {
  //   this.dif = entry.newPrice - entry.oldPrice;
  //   if (this.dif > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // brandName(competitorId:any){
  //   if (this.All.competitorId === 12 || this.Read.competitorId === 12 || this.Unread.competitorId === 12){
  //     return 'LionHart';
  //   }
  //     else {
  //       return 'Thunderer Trac Grip';
  //     }
  //   }
  
  // sellerName() {
  //   if (this.brandName(competitorId) === "LionHart"){
  //     return 'IFixItZone';
  //   }
  //   else{
  //     return 'Buy Wheels Today';
  //   }

  // }

}


// <table class="table">
// <tr>
//     <th>#</th>
//     <th>Game</th>
//     <th>Platform</th>
//     <th>Release</th>
// </tr>
// <tr *ngFor="let game of games; let i = index">
//     <td>{{i + 1}}</td>
//     <td>{{game.game}}</td>
//     <td>{{game.platform}}</td>
//     <td>{{game.release}}</td>
// </tr>
// </table>
