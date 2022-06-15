import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCivilEtatComponent } from './get-civil-etat.component';

describe('GetCivilEtatComponent', () => {
  let component: GetCivilEtatComponent;
  let fixture: ComponentFixture<GetCivilEtatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCivilEtatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCivilEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
