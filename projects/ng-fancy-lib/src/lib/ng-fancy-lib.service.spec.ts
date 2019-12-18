import { TestBed } from '@angular/core/testing';

import { NgFancyLibService } from './ng-fancy-lib.service';

describe('NgFancyLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFancyLibService = TestBed.get(NgFancyLibService);
    expect(service).toBeTruthy();
  });
});
