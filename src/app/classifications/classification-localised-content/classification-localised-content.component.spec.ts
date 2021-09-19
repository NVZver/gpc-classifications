import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import CHUNK_MOCK from '../mocks/chunk.json';
import { getText, getElement, getElements } from '../../helpers/testing';
import { ClassificationLocalisedContentComponent } from './classification-localised-content.component';

describe('ClassificationLocalisedContentComponent', () => {
  let component: ClassificationLocalisedContentComponent;
  let fixture: ComponentFixture<ClassificationLocalisedContentComponent>;
  const locators = {
    localisedContent: '[data-role="classification-details__localised-content"]',
    localisedContentItem: '[data-role="classification-details__localised-content-item"]',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationLocalisedContentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationLocalisedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('"localisedContent"', () => {
    it('should be displayed', () => {
      const elementIdElement = getElement(fixture, locators.localisedContent);
      expect(elementIdElement).not.toBeNull();
    });
    it('should display "localisedContentItems"', () => {
      const localisedContentItems = getElements(fixture, locators.localisedContentItem);
      expect(localisedContentItems.length).toBe(CHUNK_MOCK.localisedContent.length);
    });
    it('should display "localisedContentItem"', () => {
      const expectedText = `NL: Aardappelpot`;
      const localisedContentItem = getText(fixture, locators.localisedContentItem);
      expect(localisedContentItem).toBe(expectedText);
    });
  });
});
