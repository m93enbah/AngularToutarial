import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxEditorSettingsComponent } from './text-box-editor-settings.component';

describe('TextBoxEditorSettingsComponent', () => {
  let component: TextBoxEditorSettingsComponent;
  let fixture: ComponentFixture<TextBoxEditorSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxEditorSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxEditorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
