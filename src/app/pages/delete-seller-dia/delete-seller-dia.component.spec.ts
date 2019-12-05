import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSellerDiaComponent } from './delete-seller-dia.component';

describe('DeleteSellerDiaComponent', () => {
  let component: DeleteSellerDiaComponent;
  let fixture: ComponentFixture<DeleteSellerDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSellerDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSellerDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
