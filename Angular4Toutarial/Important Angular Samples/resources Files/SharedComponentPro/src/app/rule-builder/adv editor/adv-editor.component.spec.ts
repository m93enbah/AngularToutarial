import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvEditorComponent } from './adv-editor.component';

describe('AdvEditorComponent', () => {
  let component: AdvEditorComponent;
  let fixture: ComponentFixture<AdvEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
