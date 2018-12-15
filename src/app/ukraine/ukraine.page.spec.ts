import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkrainePage } from './ukraine.page';

describe('UkrainePage', () => {
  let component: UkrainePage;
  let fixture: ComponentFixture<UkrainePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkrainePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkrainePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
