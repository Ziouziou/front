import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVisioComponent } from './data-visio.component';

describe('DataVisioComponent', () => {
  let component: DataVisioComponent;
  let fixture: ComponentFixture<DataVisioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataVisioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataVisioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
