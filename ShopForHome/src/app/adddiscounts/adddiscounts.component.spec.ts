import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddiscountsComponent } from './adddiscounts.component';

describe('AdddiscountsComponent', () => {
  let component: AdddiscountsComponent;
  let fixture: ComponentFixture<AdddiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddiscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
