import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const getElement = <T>(fixture: ComponentFixture<T>, locator: string) => {
  return fixture.debugElement.query(By.css(locator));
};

export const getElements = <T>(fixture: ComponentFixture<T>, locator: string) => {
  return fixture.debugElement.queryAll(By.css(locator));
};

export const getText = <T>(fixture: ComponentFixture<T>, locator: string) => {
  return getElement(fixture, locator).nativeElement.textContent.trim();
};

