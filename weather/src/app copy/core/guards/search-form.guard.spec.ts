import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { searchFormGuard } from '../../../app/core/guards/search-form.guard';

describe('searchFormGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => searchFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
