import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBiningExampleComponent } from './style-bining-example.component';

describe('StyleBiningExampleComponent', () => {
  let component: StyleBiningExampleComponent;
  let fixture: ComponentFixture<StyleBiningExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleBiningExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBiningExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
