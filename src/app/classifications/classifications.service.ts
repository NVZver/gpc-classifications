import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chunk } from './types/chunk';
import CHUNK_MOCK from './mocks/chunk.json';

@Injectable({
  providedIn: 'root'
})
export class ClassificationsService {

  constructor() { }

  getChunk(): Observable<Chunk> {
    // todo: implement API call when it's ready;
    const chunk = JSON.parse(JSON.stringify(CHUNK_MOCK));
    return of(chunk as Chunk);
  }
}
