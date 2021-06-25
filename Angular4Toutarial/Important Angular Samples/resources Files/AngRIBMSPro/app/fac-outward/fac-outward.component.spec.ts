import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FacOutwardComponent } from './fac-outward.component';


describe('FacultativeOutComponent', () => {
  let component: FacOutwardComponent;
  let fixture: ComponentFixture<FacOutwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacOutwardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacOutwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
