import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBrandDiaComponent } from './delete-brand-dia.component';

describe('DeleteBrandDiaComponent', () => {
  let component: DeleteBrandDiaComponent;
  let fixture: ComponentFixture<DeleteBrandDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBrandDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBrandDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
