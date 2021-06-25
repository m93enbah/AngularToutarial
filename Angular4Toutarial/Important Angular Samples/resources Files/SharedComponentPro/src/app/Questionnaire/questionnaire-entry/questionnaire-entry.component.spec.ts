import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireEntryComponent } from './questionnaire-entry.component';

describe('QuestionnaireEntryComponent', () => {
  let component: QuestionnaireEntryComponent;
  let fixture: ComponentFixture<QuestionnaireEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
