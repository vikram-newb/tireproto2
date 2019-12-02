import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Brand } from './brand';
import { BrandProduct } from './brandProduct';
import { Alerts } from '../alerts/alerts';
import { DashboardBrandProduct } from '../dashboard/dashboardBrandProduct';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  brandsUrl = 'http://18.191.108.43:8000/api/brands?q-order=asc-name&q-expand=true';
  brandsUrl2 = 'http://18.191.108.43:8000/api/brands';

  BrandProductsUrl = 'http://18.191.108.43:8000/api/brandProducts';
  viewAllProductsUrl = 'http://18.191.108.43:8000/api/brands';
  markReadUrl = 'http://18.191.108.43:8000/api/alert/';
  alertsUrl = 'http://18.191.108.43:8000/api/alert?q-expand=true&q-limit=100&q-offset=0&q-order=desc-created';
  downloadUrl = 'http://18.191.108.43:8000/api/export';

  constructor(private http: HttpClient) { }
  authEmail = localStorage.getItem('authEmail');
  token = localStorage.getItem('token');

  public getBrands(): Observable<Brand[]> {

    const url = this.brandsUrl + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.get<Brand[]>(url);
  }

  public getBrands2(): Observable<Brand[]> {

    const url = this.brandsUrl2 + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.get<Brand[]>(url);
  }


  public addBrand( name: Brand): Observable<Brand> {
    const url = this.brandsUrl + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.post<Brand>(url, name, httpOptions);
  }

  public deleteBrand(brandId: number): Observable<{}> {
    // const url = `${this.brandsUrl}/${id}`;
    const url = this.brandsUrl2 + '/' + brandId + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.delete(url, httpOptions);
  }

  public getAllProductsOfBrand(brandId: string): Observable<BrandProduct[]> {
    const url = this.BrandProductsUrl + '?brandId=' + brandId + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.get<BrandProduct[]>(url, httpOptions);
  }

  public addProduct(brandId: string): Observable<BrandProduct> {
    const url = this.BrandProductsUrl + '?brandId=' + brandId + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.post<BrandProduct>(url, brandId, httpOptions);
  }

  public deleteProduct(id: number): Observable<{}> {
    const url = this.BrandProductsUrl + '/' + id + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.delete(url, httpOptions);
  }

  public getAlerts(): Observable<Alerts[]> {
    const url = this.alertsUrl + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.get<Alerts[]>(url, httpOptions);
}

  public getUnreadAlerts(): Observable<Alerts[]> {
    const url = this.alertsUrl + '&status=0' + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.get<Alerts[]>(url, httpOptions);
  }

  public getreadAlerts(): Observable<Alerts[]> {
    const url = this.alertsUrl + '&status=1' + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.get<Alerts[]>(url, httpOptions);
  }

  public dashBrandProduct(brandId: string): Observable<DashboardBrandProduct[]> {
    // tslint:disable-next-line:max-line-length
    const url = this.brandsUrl2 + '/' + brandId + '/searchCompetitorProducts' + '?auth-email=' +  this.authEmail + '&auth-token=' + this.token;
    return this.http.get<DashboardBrandProduct[]>(url, httpOptions);

  }

  public uploadCsv(brandId: string, formData: FormData): Observable<BrandProduct[]> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data; boundary: ----WebKitFormBoundaryyrV7KO0BoCBuDbTL',
        // ''
      })
    };
    const url = this.brandsUrl2 + '/' + brandId + '/upload' + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.post<BrandProduct[]>(url, formData);
  }

  public exportCSV(body: any): Observable<DashboardBrandProduct[]> {
    const url = this.downloadUrl + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.post<any>(url, body);
  }

  public markReadAlert(id: number): Observable<Alerts[]>{
    const url = this.markReadUrl + id + '/mark_read?auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.put<any>(url, id)
  }
}
