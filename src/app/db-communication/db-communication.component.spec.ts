import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCommunicationComponent } from './db-communication.component';

describe('DbCommunicationComponent', () => {
  let component: DbCommunicationComponent;
  let fixture: ComponentFixture<DbCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
