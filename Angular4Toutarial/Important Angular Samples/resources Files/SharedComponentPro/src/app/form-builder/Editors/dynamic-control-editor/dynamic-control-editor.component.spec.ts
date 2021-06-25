import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicControlEditorComponent } from './dynamic-control-editor.component';

describe('DynamicControlEditorComponent', () => {
  let component: DynamicControlEditorComponent;
  let fixture: ComponentFixture<DynamicControlEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicControlEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicControlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
