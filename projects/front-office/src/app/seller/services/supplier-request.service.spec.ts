import { TestBed } from '@angular/core/testing';

import { SupplierRequestService } from './supplier-request.service';

describe('SupplierRequestService', () => {
  let service: SupplierRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
