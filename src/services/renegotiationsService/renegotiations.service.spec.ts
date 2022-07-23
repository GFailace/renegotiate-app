import { TestBed } from '@angular/core/testing';

import { RenegotiationsService } from './renegotiations.service';

describe('RenegotiationsService', () => {
  let service: RenegotiationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenegotiationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
