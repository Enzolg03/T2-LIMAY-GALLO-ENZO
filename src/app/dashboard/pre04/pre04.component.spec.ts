import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pre04Component } from './pre04.component';

describe('Pre04Component', () => {
  let component: Pre04Component;
  let fixture: ComponentFixture<Pre04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pre04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pre04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
