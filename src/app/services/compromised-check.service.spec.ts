import { TestBed } from '@angular/core/testing';

import { CompromisedCheckService } from './compromised-check.service';

describe('CompromisedCheckService', () => {
  let service: CompromisedCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompromisedCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
