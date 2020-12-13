import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingExample01Component } from './property-binding-example01.component';

describe('PropertyBindingExample01Component', () => {
  let component: PropertyBindingExample01Component;
  let fixture: ComponentFixture<PropertyBindingExample01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBindingExample01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingExample01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
