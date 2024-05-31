import { TestBed } from '@angular/core/testing';

import { SpageService } from './spage.service';

describe('SpageService', () => {
  let service: SpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
