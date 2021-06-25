import { TestBed } from '@angular/core/testing';

import { BusinessChannelsService } from './business-channels.service';

describe('BusinessChannelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessChannelsService = TestBed.get(BusinessChannelsService);
    expect(service).toBeTruthy();
  });
});
