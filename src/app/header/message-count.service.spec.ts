import { TestBed } from '@angular/core/testing';

import { MessageCountService } from './message-count.service';

describe('MessageCountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageCountService = TestBed.get(MessageCountService);
    expect(service).toBeTruthy();
  });
});
