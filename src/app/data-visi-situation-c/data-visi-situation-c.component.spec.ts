import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVisiSituationCComponent } from './data-visi-situation-c.component';

describe('DataVisiSituationCComponent', () => {
  let component: DataVisiSituationCComponent;
  let fixture: ComponentFixture<DataVisiSituationCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataVisiSituationCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataVisiSituationCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
