import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})

export class AlertsComponent implements OnInit {
  thundererAlerts: any;
  lionAlerts: any;
  priceAlert: any;
  allAlert: any;

  constructor() {
    // this.thundererAlerts = [{
    //   mpn: 'TH2300',
    //   productname: '33X12.50R17LT',
    //   cost: '127.62',
    //   quantity: '1',
    //   wheelsin: '520',
    //   wheelsout: '1361'
    // },
    // {
    //   mpn: 'TH2300',
    //   productname: '33X12.50R17LT',
    //   cost: '127.62',
    //   quantity: '1',
    //   wheelsin: '520',
    //   wheelsout: '1361'
    // },
    //  {
    //   mpn: 'TH2300',
    //   productname: '33X12.50R17LT',
    //   cost: '127.62',
    //   quantity: '1',
    //   wheelsin: '520',
    //   wheelsout: '1361'
    // },
    //  {
    //   mpn: 'TH2300',
    //   productname: '33X12.50R17LT',
    //   cost: '127.62',
    //   quantity: '1',
    //   wheelsin: '520',
    //   wheelsout: '1361'
    //  },
    //  ];
    // this.lionAlerts = [{
    //   mpn: 'LHS32030040II',
    //   productname: '275/30ZR20 LIONHART LH-THREE II 97W XL	',
    //   cost: '127.62',
    //   quantity: '1',
    //   wheelsin: '520',
    //   wheelsout: '1361'
    // }, {
    //   mpn: 'TH2300',
    //   productname: '33X12.50R17LT',
    //   cost: '127.62',
    //   quantity: '1',
    //   wheelsin: '520',
    //   wheelsout: '1361'
    // }, {
    //   mpn: 'TH2300',
    //   productname: '33X12.50R17LT',
    //   cost: '127.62',
    //   quantity: '1',
    //   wheelsin: '520',
    //   wheelsout: '1361'
    // }];
   }
  ngOnInit() {
    this.priceAlert = [{
      mpn : 'TH2300',
      brand : 'Berserk',
      sellerName: 'kentaro Miura',
      oldPrice: '2530',
      newPrice: '3405',
    }, {
      mpn : 'TH2300',
      brand : 'Stardust',
      sellerName: 'Araki',
      oldPrice: '2530',
      newPrice: '2990',
    }, {
      mpn : 'TH2300',
      brand : '21st Century Boys',
      sellerName: 'Naoki Urasava',
      oldPrice: '1566',
      newPrice: '9876',
    }];
    this.allAlert = [
      {
        mpn : 'TH2300',
        brand : 'Stardust',
        sellerName: 'Araki',
        oldPrice: '2530',
        newPrice: '2990',
      },
      {
        mpn : 'TH2300',
        brand : 'StoneOcean',
        sellerName: 'Araki',
        oldPrice: '5230',
        newPrice: '2990',
      },
      {
        mpn : 'TH2300',
        brand : 'steelBallrun',
        sellerName: 'Araki',
        oldPrice: '2430',
        newPrice: '4990',
      },
      {
        mpn : 'TH2300',
        brand : 'Bleach',
        sellerName: 'kishimoto',
        oldPrice: '2530',
        newPrice: '2990',
      },
      {
        mpn : 'TH2300',
        brand : 'Hunter x Hunter',
        sellerName: 'togashi',
        oldPrice: '2530',
        newPrice: '2990',
      },
    ];
  }

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
