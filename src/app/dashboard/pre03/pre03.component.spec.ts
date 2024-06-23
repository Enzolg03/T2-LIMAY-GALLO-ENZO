import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pre03Component } from './pre03.component';

describe('Pre03Component', () => {
  let component: Pre03Component;
  let fixture: ComponentFixture<Pre03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pre03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pre03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
