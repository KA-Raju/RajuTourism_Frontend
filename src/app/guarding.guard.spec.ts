import { TestBed } from '@angular/core/testing';

import { GuardingGuard } from './guarding.guard';

describe('GuardingGuard', () => {
  let guard: GuardingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});