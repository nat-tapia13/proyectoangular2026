import { TestBed } from '@angular/core/testing';

import { Punto1 } from './punto1';

describe('Punto1', () => {
  let service: Punto1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Punto1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
