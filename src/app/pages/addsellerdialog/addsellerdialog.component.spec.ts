import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsellerdialogComponent } from './addsellerdialog.component';

describe('AddsellerdialogComponent', () => {
  let component: AddsellerdialogComponent;
  let fixture: ComponentFixture<AddsellerdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsellerdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsellerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
