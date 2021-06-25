import { TestBed } from '@angular/core/testing';

import { ControlsFactoryService } from './controls-factory.service';

describe('ControlsFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlsFactoryService = TestBed.get(ControlsFactoryService);
    expect(service).toBeTruthy();
  });
});
