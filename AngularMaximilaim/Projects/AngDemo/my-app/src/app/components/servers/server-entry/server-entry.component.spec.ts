import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerEntryComponent } from './server-entry.component';

describe('ServerEntryComponent', () => {
  let component: ServerEntryComponent;
  let fixture: ComponentFixture<ServerEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
