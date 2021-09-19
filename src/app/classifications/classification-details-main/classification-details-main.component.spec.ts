import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chunk } from 'src/app/classifications/types/chunk';
import { getText } from '../../helpers/testing';
import CHUNK_MOCK from '../mocks/chunk.json';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ClassificationDetailsMainComponent } from './classification-details-main.component';

describe('ClassificationDetailsMainComponent', () => {
  let component: ClassificationDetailsMainComponent;
  let fixture: ComponentFixture<ClassificationDetailsMainComponent>;

  const locators = {
    id: '[data-role="classification-details__id"]',
    level: '[data-role="classification-details__level"]',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationDetailsMainComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationDetailsMainComponent);
    component = fixture.componentInstance;
    component.id = CHUNK_MOCK.id;
    component.level = CHUNK_MOCK.level;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('mapping', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });
    it('should display "id"', () => {
      const idText = getText(fixture, locators.id);
      expect(idText).toBe(CHUNK_MOCK.id);
    });
    it('should display "level"', () => {
      const levelText = getText(fixture, locators.level);
      expect(levelText).toBe(CHUNK_MOCK.level);
    });

  });
});
