import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVisiContratDistributionComponent } from './data-visi-contrat-distribution.component';

describe('DataVisiContratDistributionComponent', () => {
  let component: DataVisiContratDistributionComponent;
  let fixture: ComponentFixture<DataVisiContratDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataVisiContratDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataVisiContratDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
