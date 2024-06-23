import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pre02Component } from './pre02.component';

describe('Pre02Component', () => {
  let component: Pre02Component;
  let fixture: ComponentFixture<Pre02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pre02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pre02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
