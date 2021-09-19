import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getText, getElement } from '../../helpers/testing';
import { ClassificationDetailsTrackingComponent } from './classification-details-tracking.component';

import CHUNK_MOCK from '../mocks/chunk.json';

describe('ClassificationDetailsTrackingComponent', () => {
  let component: ClassificationDetailsTrackingComponent;
  let fixture: ComponentFixture<ClassificationDetailsTrackingComponent>;
  const locators = {
    tracking: '[data-role="classification-details__tracking"]',
    trackingCreatedAt: '[data-role="classification-details__tracking-created-at"]',
    trackinglastModifiedAt: '[data-role="classification-details__tracking-last-modified-at"]',
    trackinglastModifiedBy: '[data-role="classification-details__tracking-last-modified-by"]',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationDetailsTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationDetailsTrackingComponent);
    component = fixture.componentInstance;
    component.tracking = CHUNK_MOCK.tracking;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('"tracking"', () => {
    it('should be displayed', () => {
      const trackingElement = getElement(fixture, locators.tracking);
      expect(trackingElement).not.toBeNull();
    });
    it('should display "createdAt"', () => {
      const expectedText = `Jul 28, 2020`;
      const createdAtText = getText(fixture, locators.trackingCreatedAt);
      expect(createdAtText).toBe(expectedText);
    });
    it('should display "lastModifiedAt"', () => {
      const expectedText = `Jul 28, 2020`;
      const lastModifiedAt = getText(fixture, locators.trackinglastModifiedAt);
      expect(lastModifiedAt).toBe(expectedText);
    });
    it('should display "lastModifiedBy"', () => {
      const lastModifiedBy = getText(fixture, locators.trackinglastModifiedBy);
      expect(lastModifiedBy).toBe(CHUNK_MOCK.tracking.lastModifiedBy);
    });
  });
});
