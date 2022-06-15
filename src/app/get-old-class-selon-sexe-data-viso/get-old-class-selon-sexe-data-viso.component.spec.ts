import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOldClassSelonSexeDataVisoComponent } from './get-old-class-selon-sexe-data-viso.component';

describe('GetOldClassSelonSexeDataVisoComponent', () => {
  let component: GetOldClassSelonSexeDataVisoComponent;
  let fixture: ComponentFixture<GetOldClassSelonSexeDataVisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOldClassSelonSexeDataVisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOldClassSelonSexeDataVisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
