import { TestBed } from '@angular/core/testing';

import { AuthenticatonService } from './authenticaton.service';

describe('AuthenticatonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticatonService = TestBed.get(AuthenticatonService);
    expect(service).toBeTruthy();
  });
});
