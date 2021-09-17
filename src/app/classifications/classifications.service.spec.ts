import { TestBed } from '@angular/core/testing';

import { ClassificationsService } from './classifications.service';

import * as CHUNK_MOCK from './mocks/chunk.json';

describe('ClassificationsService', () => {
  let service: ClassificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getChunk', () => {
    it('should return mock data', done => {
      const expectedResult = JSON.stringify(CHUNK_MOCK);
      service.getChunk().subscribe(chunk => {
        const actualResult = JSON.stringify(chunk);
        expect(expectedResult).toBe(actualResult);
        done();
      });
    });
  });

});
