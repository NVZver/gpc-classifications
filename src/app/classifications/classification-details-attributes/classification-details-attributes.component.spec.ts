import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationDetailsAttributesComponent } from './classification-details-attributes.component';

describe('ClassificationDetailsAttributesComponent', () => {
  let component: ClassificationDetailsAttributesComponent;
  let fixture: ComponentFixture<ClassificationDetailsAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationDetailsAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationDetailsAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
