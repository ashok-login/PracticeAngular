import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVariableExampleComponent } from './template-reference-variable-example.component';

describe('TemplateReferenceVariableExampleComponent', () => {
  let component: TemplateReferenceVariableExampleComponent;
  let fixture: ComponentFixture<TemplateReferenceVariableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReferenceVariableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferenceVariableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
