import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DebtsService } from './debts.service';

describe('DebtsService', () => {
  let service: DebtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DebtsService);
  });

  it('Teste serviço', () => {
    expect(service).toBeTruthy();
  });
});
