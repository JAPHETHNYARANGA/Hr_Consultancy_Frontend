import { TestBed } from '@angular/core/testing';

import { DeleteListingsService } from './delete-listings.service';

describe('DeleteListingsService', () => {
  let service: DeleteListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
