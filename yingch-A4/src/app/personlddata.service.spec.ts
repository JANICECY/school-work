import { TestBed } from '@angular/core/testing';

import { PersonlddataService } from './personlddata.service';

describe('PersonlddataService', () => {
  let service: PersonlddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonlddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
