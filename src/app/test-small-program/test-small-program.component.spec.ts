import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSmallProgramComponent } from './test-small-program.component';

describe('TestSmallProgramComponent', () => {
  let component: TestSmallProgramComponent;
  let fixture: ComponentFixture<TestSmallProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSmallProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSmallProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
