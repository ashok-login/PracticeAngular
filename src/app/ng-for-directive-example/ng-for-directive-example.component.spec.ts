import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDirectiveExampleComponent } from './ng-for-directive-example.component';

describe('NgForDirectiveExampleComponent', () => {
  let component: NgForDirectiveExampleComponent;
  let fixture: ComponentFixture<NgForDirectiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForDirectiveExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
