/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreludeComponent } from './prelude.component';

describe('PreludeComponent', () => {
  let component: PreludeComponent;
  let fixture: ComponentFixture<PreludeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreludeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
