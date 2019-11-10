import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/internal/operators';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, of } from 'rxjs';
const localUrl = 'http://localhost:8000/login';

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


  //  getUser(): Observable<any> {
  //    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
  //    return this.http.get<User[]>(localUrl, httpOptions).pipe(retry(3), ;
  //  }

   isValidUser(body: User) {
     return this.http.post(localUrl, body, httpOptions);
    //  .pipe(
    //   catchError(this.handleError('loginUser', [])));
    }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
