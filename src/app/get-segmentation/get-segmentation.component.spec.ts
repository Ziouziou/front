import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSegmentationComponent } from './get-segmentation.component';

describe('GetSegmentationComponent', () => {
  let component: GetSegmentationComponent;
  let fixture: ComponentFixture<GetSegmentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSegmentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSegmentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
