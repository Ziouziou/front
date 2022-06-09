import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CALCULATORComponent } from './calculator.component';

describe('CALCULATORComponent', () => {
  let component: CALCULATORComponent;
  let fixture: ComponentFixture<CALCULATORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CALCULATORComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CALCULATORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
