import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationDetailsTrackingComponent } from './classification-details-tracking.component';

describe('ClassificationDetailsTrackingComponent', () => {
  let component: ClassificationDetailsTrackingComponent;
  let fixture: ComponentFixture<ClassificationDetailsTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationDetailsTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationDetailsTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
