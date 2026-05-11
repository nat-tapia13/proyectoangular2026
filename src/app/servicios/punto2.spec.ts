import { TestBed } from '@angular/core/testing';

import { Punto2 } from './punto2';

describe('Punto2', () => {
  let service: Punto2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Punto2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
