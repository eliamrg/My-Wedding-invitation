import { TestBed } from '@angular/core/testing';

import { FirebasequeryService } from './firebasequery.service';

describe('FirebasequeryService', () => {
  let service: FirebasequeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebasequeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
