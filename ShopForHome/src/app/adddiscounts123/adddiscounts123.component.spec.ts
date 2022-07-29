import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adddiscounts123Component } from './adddiscounts123.component';

describe('Adddiscounts123Component', () => {
  let component: Adddiscounts123Component;
  let fixture: ComponentFixture<Adddiscounts123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adddiscounts123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adddiscounts123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
