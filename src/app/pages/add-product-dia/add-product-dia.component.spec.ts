import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductDiaComponent } from './add-product-dia.component';

describe('AddProductDiaComponent', () => {
  let component: AddProductDiaComponent;
  let fixture: ComponentFixture<AddProductDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
