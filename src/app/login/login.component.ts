import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 UserForm = this.fb.group({
  email : ['', [Validators.required, Validators.email]],
  password : ['', [Validators.required, Validators.email]]
 });

  getErrorMessage() {
    return this.UserForm.value.email.hasError('required') ? 'You must enter a value' :
    this.UserForm.value.email.hasError('email') ? 'Not a  Valid mail' : ' ' ;
  }
  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit() {
  }
  onLogin() {
    this.api.isValidUser(this.UserForm.value)
             .subscribe(response => {
               console.log(response);
               localStorage.setItem('isLoggedin', 'true');
               this.router.navigate(['header', 'dashboard']);
    });
  }
}
