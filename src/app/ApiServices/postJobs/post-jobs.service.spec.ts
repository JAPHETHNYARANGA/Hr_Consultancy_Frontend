import { TestBed } from '@angular/core/testing';

import { PostJobsService } from './post-jobs.service';

describe('PostJobsService', () => {
  let service: PostJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
