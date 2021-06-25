import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxSettingsComponent } from './text-box-settings.component';

describe('TextBoxSettingsComponent', () => {
  let component: TextBoxSettingsComponent;
  let fixture: ComponentFixture<TextBoxSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
