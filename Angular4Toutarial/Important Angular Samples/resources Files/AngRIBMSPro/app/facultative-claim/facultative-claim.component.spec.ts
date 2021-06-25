import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativeClaimComponent } from './facultative-claim.component';

describe('FacultativeClaimComponent', () => {
  let component: FacultativeClaimComponent;
  let fixture: ComponentFixture<FacultativeClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativeClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativeClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
