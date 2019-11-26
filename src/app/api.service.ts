import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/internal/operators';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { Brand } from './pages/brands/brand';


const localUrl = 'http://18.191.108.43:8000/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(localUrl);
  }

   isValidUser(body: User) {
     return this.http.post(localUrl , body, httpOptions);
    //  .pipe(
    //   catchError(this.handleError('loginUser', [])));
    }

    // getAllBrands() {
    //   const localUrl = ` "api/brands/?auth-email="+ ${localStorage.getItem(email)} + "auth-token=" + $`;
    //   return this.http.get(localUrl);
    // }

    // addBrand(brand: Brand): Observable<Brand> {
      // return this.http.post<Brand>(localUrl, brand, httpOptions).pipe()
    // }

    loggedIn() {
      return localStorage.getItem('isLoggedin');
    }




   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
