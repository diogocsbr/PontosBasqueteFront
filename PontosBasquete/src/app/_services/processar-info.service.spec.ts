import { TestBed } from '@angular/core/testing';

import { ProcessarInfoService } from './processar-info.service';

describe('ProcessarInfoService', () => {
  let service: ProcessarInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessarInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
