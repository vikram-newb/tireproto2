import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProductLinkDiaComponent } from './upload-product-link-dia.component';

describe('UploadProductLinkDiaComponent', () => {
  let component: UploadProductLinkDiaComponent;
  let fixture: ComponentFixture<UploadProductLinkDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProductLinkDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProductLinkDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
