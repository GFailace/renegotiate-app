import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RenegotiationsService } from './renegotiations.service';

describe('RenegotiationsService', () => {
  let service: RenegotiationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RenegotiationsService);
  });

  it('Teste serviço', () => {
    expect(service).toBeTruthy();
  });
});
