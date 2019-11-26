import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Brand } from './brand';
import { BrandProduct } from './brandProduct';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  brandsUrl = 'http://18.191.108.43:8000/api/brands';
  BrandProductsUrl = 'http://18.191.108.43:8000/api/brandProducts';
  viewAllProductsUrl = 'http://18.191.108.43:8000/api/brands';


  constructor(private http: HttpClient) { }
  authEmail = localStorage.getItem('authEmail');
  token = localStorage.getItem('token');

  public getBrands(): Observable<Brand[]> {

    const url = this.brandsUrl + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.get<Brand[]>(url);
  }

  public addBrand( name: Brand): Observable<Brand> {
    const url = this.brandsUrl + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.post<Brand>(url, name, httpOptions);
  }

  public deleteBrand(id: number): Observable<{}> {
    const url = `${this.brandsUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  public updateBrand(brand: Brand): Observable<Brand> {
    return this.http.put<Brand>(this.brandsUrl, brand, httpOptions);
  }

  // public createBrandProduct(brand: Brand): Observable<Brand> {
  //   const url = this.BrandProductsUrl + '?auth-email=' + this.authEmail + '&auth-token=' + this.token;
  //   return this.http.post<Brand>(url, brand, httpOptions);
  // }

  public getAllProductsOfBrand(brandId: string): Observable<BrandProduct> {
    const url = this.BrandProductsUrl + '?brandId=' + brandId + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.get<BrandProduct>(url, httpOptions);
  }

  public addProduct(brandId: string): Observable<BrandProduct> {
    const url = this.BrandProductsUrl + '?brandId=' + brandId + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.post<BrandProduct>(url, brandId, httpOptions);
  }

  public viewAllProductOfParticularBrand(id: string): Observable<Brand> {
    const url = this.viewAllProductsUrl + '?id=' + id + '&auth-email=' + this.authEmail + '&auth-token=' + this.token;
    return this.http.get<Brand>(url, httpOptions);
  }

  

}
