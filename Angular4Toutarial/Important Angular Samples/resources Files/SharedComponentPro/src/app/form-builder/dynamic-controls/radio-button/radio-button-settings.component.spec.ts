import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonSettingsComponent } from './radio-button-settings.component';

describe('RadioButtonSettingsComponent', () => {
  let component: RadioButtonSettingsComponent;
  let fixture: ComponentFixture<RadioButtonSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
