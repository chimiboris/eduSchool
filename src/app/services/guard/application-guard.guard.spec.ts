import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { applicationGuardGuard } from './application-guard.guard';

describe('applicationGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => applicationGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
