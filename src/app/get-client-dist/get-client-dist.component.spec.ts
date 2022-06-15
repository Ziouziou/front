import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientDistComponent } from './get-client-dist.component';

describe('GetClientDistComponent', () => {
  let component: GetClientDistComponent;
  let fixture: ComponentFixture<GetClientDistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientDistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
