import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirDNComponent } from './voir-dn.component';

describe('VoirDNComponent', () => {
  let component: VoirDNComponent;
  let fixture: ComponentFixture<VoirDNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirDNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirDNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
