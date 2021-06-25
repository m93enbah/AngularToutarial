import { TestBed, inject } from '@angular/core/testing';

import { EmpServiceService } from './emp-service.service';

describe('EmpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpServiceService]
    });
  });

  it('should be created', inject([EmpServiceService], (service: EmpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
