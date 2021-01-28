import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleExpertiseComptablePage } from './pole-expertise-comptable.page';

describe('PoleExpertiseComptablePage', () => {
  let component: PoleExpertiseComptablePage;
  let fixture: ComponentFixture<PoleExpertiseComptablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleExpertiseComptablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleExpertiseComptablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
