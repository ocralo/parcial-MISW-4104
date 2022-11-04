import { TestBed } from '@angular/core/testing';

import { CoffeeVarietiesService } from './coffee-varieties.service';

describe('CoffeeVarietiesService', () => {
  let service: CoffeeVarietiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeVarietiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
