import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLpartieComponent } from './mlpartie.component';

describe('MLpartieComponent', () => {
  let component: MLpartieComponent;
  let fixture: ComponentFixture<MLpartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLpartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLpartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
