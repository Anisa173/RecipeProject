import { TestBed } from '@angular/core/testing';

import { OneRecipeViewService } from './one-recipe-view.service';

describe('OneRecipeViewService', () => {
  let service: OneRecipeViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneRecipeViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
