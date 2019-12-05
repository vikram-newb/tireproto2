import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Seller } from './seller';
import { SellerProduct } from './sellerProduct';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

@Injectable({
    providedIn: 'root'
  })

export class SellersService {

    sellersUrl = 'http://18.191.108.43:8000/api/competitors?q-order=asc-name';
    sellersUrl2 = 'http://18.191.108.43:8000/api/competitors';
    sellerProductUrl = 'http://18.191.108.43:8000/api/competitor_links';
    constructor(private http: HttpClient) {}

    authEmail = localStorage.getItem('authEmail');
    token = localStorage.getItem('token');

    public getCompetitors(): Observable<Seller[]> {
        const url = this.sellersUrl + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
        return this.http.get<Seller[]>(url);
    }

    public addCompetitor(name: Seller): Observable<Seller> {
        const url = this.sellersUrl2 + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
        return this.http.post<Seller>(url, name, httpOptions);
 }

    public deleteCompetitor(sellerId: number): Observable<{}> {
        const url = this.sellersUrl2 + '/' + sellerId + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
        return this.http.delete(url, httpOptions);
    }

    public addCompetitorProduct(competitorId): Observable<SellerProduct> {
        const url = this.sellerProductUrl + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
        return this.http.post<SellerProduct>(url,competitorId, httpOptions);
    }

    public getCompetitorProduct(competitorId): Observable<SellerProduct[]> {
        // tslint:disable-next-line:max-line-length
        const url = this.sellerProductUrl + '?competitorId=' + competitorId + '&q-expand=true&q-order=asc-skuID&auth-email=' + this.authEmail + '&auth-token=' + this.token;
        return this.http.get<SellerProduct[]>(url, httpOptions);
    }

}
