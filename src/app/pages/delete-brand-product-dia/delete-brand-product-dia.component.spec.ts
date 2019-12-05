import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBrandProductDiaComponent } from './delete-brand-product-dia.component';

describe('DeleteBrandProductDiaComponent', () => {
  let component: DeleteBrandProductDiaComponent;
  let fixture: ComponentFixture<DeleteBrandProductDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBrandProductDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBrandProductDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
