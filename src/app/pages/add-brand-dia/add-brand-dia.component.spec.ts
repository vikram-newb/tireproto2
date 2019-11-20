import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrandDiaComponent } from './add-brand-dia.component';

describe('AddBrandDiaComponent', () => {
  let component: AddBrandDiaComponent;
  let fixture: ComponentFixture<AddBrandDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBrandDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBrandDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
