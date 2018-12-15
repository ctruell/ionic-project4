import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroatiaPage } from './croatia.page';

describe('CroatiaPage', () => {
  let component: CroatiaPage;
  let fixture: ComponentFixture<CroatiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroatiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroatiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
