import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { of, combineLatest, fromEvent, BehaviorSubject, Subject } from 'rxjs';
import { map, switchMap, filter, takeUntil, debounceTime } from 'rxjs/operators';
import { ChunkAttribute } from '../types/chunk';

interface SortingPayload{
  field: 'attributeId' | 'attributeType' | 'lastModifiedAt';
  direction: 'asc' | 'desc';
}
@Component({
  selector: 'app-classification-details-attributes',
  templateUrl: './classification-details-attributes.component.html',
  styleUrls: ['./classification-details-attributes.component.scss']
})
export class ClassificationDetailsAttributesComponent implements OnInit, OnDestroy {

  searchInput = document.querySelector('[data-role="classification-details-attribute__search-input"]');

  sortFields = [{
    name: 'Attribute Id',
    value: 'attributeId'
  }, {
    name: 'Attribute Type',
    value: 'attributeType'
  }, {
    name: 'Last modified',
    value: 'lastModifiedAt'
  }];

  @Input() chunkAttributes: ChunkAttribute[] = [];

  search$ = new BehaviorSubject('');
  sort$ = new BehaviorSubject<SortingPayload | undefined>(undefined);

  gc$ = new Subject();

  attributes$ = combineLatest([
    this.search$,
    this.sort$
  ]).pipe(switchMap(([searchText, sort]) => {
    let attributes: ChunkAttribute[];
    if (searchText === ''){
      attributes = this.chunkAttributes;
    } else {
      attributes = this.chunkAttributes.filter(attribute => attribute
        .attributeId
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase()));
    }

    if (attributes.length && sort){
      attributes = attributes.sort((attribute1, attribute2) => {
        let value1 = attribute1[sort.field];
        let value2 = attribute2[sort.field];
        const directionMidifier = sort.direction === 'asc' ? 1 : -1;
        if (sort.field === 'lastModifiedAt'){
          value1 = new Date(value1);
          value2 = new Date(value2);
        }

        if (value1 > value2){
          return 1 * directionMidifier;
        }
        if (value1 < value2){
          return -1 * directionMidifier;
        }

        return 0;
      });
    }
    return of(attributes);
  }));

  onSort(sortPayload): void {
    this.sort$.next(sortPayload);
  }

  ngOnInit(): void {
    this.subscribeOnSearch();
  }

  ngOnDestroy(): void {
    this.gc$.next();
    this.gc$.complete();
  }

  private subscribeOnSearch(): void{
    const search: HTMLInputElement = document.querySelector('[data-role="classification-details-attribute__search-input"]');
    if (search){
      fromEvent(search, 'input').pipe(
        map(e => (e.target as HTMLInputElement).value),
        takeUntil(this.gc$),
        debounceTime(10),
      ).subscribe(text => {
        this.search$.next(text);
      });
    }
  }

}
