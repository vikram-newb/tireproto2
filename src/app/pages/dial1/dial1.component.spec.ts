import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dial1Component } from './dial1.component';

describe('Dial1Component', () => {
  let component: Dial1Component;
  let fixture: ComponentFixture<Dial1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dial1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
