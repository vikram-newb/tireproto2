import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/internal/operators';
import { BrandsService } from '../brands/brands.service';
import { SellersService } from '../sellers/sellers.service';
import { Alerts } from './alerts';


// import All_data from 'src/assets/data/alerts_all.json';
// import Read_data from 'src/assets/data/alerts_read.json';
// import Unread_data from 'src/assets/data/alerts_unread.json';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})

export class AlertsComponent implements OnInit {

  alerts: Alerts[];
  readAlerts: Alerts[];
  unreadAlerts: Alerts[];
  dif: any;
  dif2: any;
  // public All: any = All_data.data;
  // public Read: any = Read_data.data;
  // public Unread: any = Unread_data.data;



  constructor( public sellerService: SellersService,
              public brandsService: BrandsService) {}

  
  ngOnInit() {
    // this.getAlerts();
    this.brandsService.getAlerts().subscribe(resp => {
      this.alerts = resp['data']
    })
    this.brandsService.getUnreadAlerts().subscribe(resp => {
      this.unreadAlerts = resp['data']
    })
    this.brandsService.getreadAlerts().subscribe( resp =>{
      this.readAlerts = resp['data']
    })
  }

  
}
