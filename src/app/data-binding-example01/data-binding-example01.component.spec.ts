import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingExample01Component } from './data-binding-example01.component';

describe('DataBindingExample01Component', () => {
  let component: DataBindingExample01Component;
  let fixture: ComponentFixture<DataBindingExample01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingExample01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingExample01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
