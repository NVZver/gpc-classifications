import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassificationsService } from '../classifications.service';
import CHUNK_MOCK from '../mocks/chunk.json';
import { ClassificationDetailsComponent } from './classification-details.component';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ClassificationDetailsMainComponent } from 'src/app/classifications/classification-details-main/classification-details-main.component';
import { ClassificationEditComponent } from 'src/app/classifications/classification-edit/classification-edit.component';

describe('ClassificationDetailsComponent', () => {
  let component: ClassificationDetailsComponent;
  let fixture: ComponentFixture<ClassificationDetailsComponent>;
  let classificationsServiceStub: ClassificationsService;

  beforeEach(async () => {
    classificationsServiceStub = {
      getChunk: jasmine.createSpy('getChunk').and.returnValue(of(CHUNK_MOCK))
    };

    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        ClassificationDetailsComponent,
        ClassificationDetailsMainComponent,
        ClassificationEditComponent,
      ],
      providers: [
        { provide: ClassificationsService, useValue: classificationsServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('chunk$', () => {
    it('should run "getChunk" from "calssificationService"', done => {
      component.chunk$.subscribe(chunk => {
        expect(classificationsServiceStub.getChunk).toHaveBeenCalled();
        done();
      });
    });
  });
});
