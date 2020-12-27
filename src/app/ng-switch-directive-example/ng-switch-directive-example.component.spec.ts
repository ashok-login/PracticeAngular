import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchDirectiveExampleComponent } from './ng-switch-directive-example.component';

describe('NgSwitchDirectiveExampleComponent', () => {
  let component: NgSwitchDirectiveExampleComponent;
  let fixture: ComponentFixture<NgSwitchDirectiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchDirectiveExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
