import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticEmpListComponent } from './static-emp-list.component';

describe('StaticEmpListComponent', () => {
  let component: StaticEmpListComponent;
  let fixture: ComponentFixture<StaticEmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticEmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticEmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
