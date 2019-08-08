import { TestBed } from '@angular/core/testing';

import { SellerGaurdService } from './seller-gaurd.service';

describe('SellerGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerGaurdService = TestBed.get(SellerGaurdService);
    expect(service).toBeTruthy();
  });
});
