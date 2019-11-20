import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private  apiService: ApiService, private router: Router) {}

  canActivate(): boolean {
    if (this.apiService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
