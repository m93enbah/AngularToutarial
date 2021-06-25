import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessChannelsComponent } from './business-channels.component';

describe('BusinessChannelsComponent', () => {
  let component: BusinessChannelsComponent;
  let fixture: ComponentFixture<BusinessChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
