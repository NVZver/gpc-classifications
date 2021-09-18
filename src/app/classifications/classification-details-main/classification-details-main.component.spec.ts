import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Chunk } from 'src/app/classifications/types/chunk';

import CHUNK_MOCK from '../mocks/chunk.json';
import { ClassificationDetailsMainComponent } from './classification-details-main.component';

describe('ClassificationDetailsMainComponent', () => {
  let component: ClassificationDetailsMainComponent;
  let fixture: ComponentFixture<ClassificationDetailsMainComponent>;

  function getElement(locator: string): DebugElement {
    return fixture.debugElement.query(By.css(locator));
  }

  function getElements(locator): DebugElement[] {
    return fixture.debugElement.queryAll(By.css(locator));
  }

  function getText(locator: string): string{
    return getElement(locator).nativeElement.textContent.trim();

  }
  const locators = {
    id: '[data-role="classification-details__id"]',
    level: '[data-role="classification-details__level"]',
    localisedContent: '[data-role="classification-details__localised-content"]',
    localisedContentItem: '[data-role="classification-details__localised-content-item"]',
    tracking: '[data-role="classification-details__tracking"]',
    trackingCreatedAt: '[data-role="classification-details__tracking-created-at"]',
    trackinglastModifiedAt: '[data-role="classification-details__tracking-last-modified-at"]',
    trackinglastModifiedBy: '[data-role="classification-details__tracking-last-modified-by"]',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationDetailsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationDetailsMainComponent);
    component = fixture.componentInstance;
    component.chunk = CHUNK_MOCK as Chunk;
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
      const idText = getText(locators.id);
      expect(idText).toBe(CHUNK_MOCK.id);
    });
    it('should display "level"', () => {
      const levelText = getText(locators.level);
      expect(levelText).toBe(CHUNK_MOCK.level);
    });
    describe('"localisedContent"', () => {
      it('should be displayed', () => {
        const elementIdElement = getElement(locators.localisedContent);
        expect(elementIdElement).not.toBeNull();
      });
      it('should display "localisedContentItems"', () => {
        const localisedContentItems = getElements(locators.localisedContentItem);
        expect(localisedContentItems.length).toBe(CHUNK_MOCK.localisedContent.length);
      });
      it('should display "localisedContentItem"', () => {
        const expectedText = `NL: Aardappelpot`;
        const localisedContentItem = getText(locators.localisedContentItem);
        expect(localisedContentItem).toBe(expectedText);
      });
    });
    describe('"tracking"', () => {
      it('should be displayed', () => {
        const trackingElement = getElement(locators.tracking);
        expect(trackingElement).not.toBeNull();
      });
      it('should display "createdAt"', () => {
        const expectedText = `Jul 28, 2020`;
        const createdAtText = getText(locators.trackingCreatedAt);
        expect(createdAtText).toBe(expectedText);
      });
      it('should display "lastModifiedAt"', () => {
        const expectedText = `Jul 28, 2020`;
        const lastModifiedAt = getText(locators.trackinglastModifiedAt);
        expect(lastModifiedAt).toBe(expectedText);
      });
      it('should display "lastModifiedBy"', () => {
        const lastModifiedBy = getText(locators.trackinglastModifiedBy);
        expect(lastModifiedBy).toBe(CHUNK_MOCK.tracking.lastModifiedBy);
      });
    });
  });
});
