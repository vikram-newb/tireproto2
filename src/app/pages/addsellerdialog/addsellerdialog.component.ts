import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addsellerdialog',
  templateUrl: './addsellerdialog.component.html',
  styleUrls: ['./addsellerdialog.component.css']
})
export class AddsellerdialogComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public addsellerdialogRef: MatDialogRef<AddsellerdialogComponent>) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sellername: '',
      StoreLink: ''
    });
  }

  submit(form) {
    this.addsellerdialogRef.close(`{form.value.sellername}`);
  }

}
