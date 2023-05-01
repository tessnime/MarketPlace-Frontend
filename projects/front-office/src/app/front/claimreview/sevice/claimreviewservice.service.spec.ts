import { TestBed } from '@angular/core/testing';

import { ClaimreviewserviceService } from './claimreviewservice.service';

describe('ClaimreviewserviceService', () => {
  let service: ClaimreviewserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimreviewserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
