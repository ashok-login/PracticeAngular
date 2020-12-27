import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfElseExampleComponent } from './ng-if-else-example.component';

describe('NgIfElseExampleComponent', () => {
  let component: NgIfElseExampleComponent;
  let fixture: ComponentFixture<NgIfElseExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfElseExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfElseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
