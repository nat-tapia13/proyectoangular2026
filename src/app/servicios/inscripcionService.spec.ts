import { TestBed } from '@angular/core/testing';

import { InscripcionService } from './inscripcionService';

describe('InscripcionService', () => {
  let service: InscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
