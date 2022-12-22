import { TestBed } from '@angular/core/testing';

import { PolicejobService } from './policejob.service';

describe('PolicejobService', () => {
  let service: PolicejobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicejobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
