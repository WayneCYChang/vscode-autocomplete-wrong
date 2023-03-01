import { TestBed } from '@angular/core/testing';

import { ParentAService } from './parent-a.service';

describe('ParentAService', () => {
  let service: ParentAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
