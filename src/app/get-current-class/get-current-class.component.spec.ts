import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCurrentClassComponent } from './get-current-class.component';

describe('GetCurrentClassComponent', () => {
  let component: GetCurrentClassComponent;
  let fixture: ComponentFixture<GetCurrentClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCurrentClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCurrentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
