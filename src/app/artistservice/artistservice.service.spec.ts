import { TestBed, inject } from '@angular/core/testing';

import { ArtistserviceService } from './artistservice.service';

describe('ArtistserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistserviceService]
    });
  });

  it('should be created', inject([ArtistserviceService], (service: ArtistserviceService) => {
    expect(service).toBeTruthy();
  }));
});
