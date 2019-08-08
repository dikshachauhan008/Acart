import { TestBed } from '@angular/core/testing';

import { AdminGaurdService } from './admin-gaurd.service';

describe('AdminGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminGaurdService = TestBed.get(AdminGaurdService);
    expect(service).toBeTruthy();
  });
});
