import { TestBed } from '@angular/core/testing';

import { Punto3 } from './punto3';

describe('Punto3', () => {
  let service: Punto3;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Punto3);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
