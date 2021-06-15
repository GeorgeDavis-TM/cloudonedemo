import { TestBed } from '@angular/core/testing';

import { C1TickerService } from './c1-ticker.service';

describe('C1TickerService', () => {
  let service: C1TickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C1TickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
