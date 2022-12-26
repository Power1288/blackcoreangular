import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponArmurerieComponent } from './weapon-armurerie.component';

describe('WeaponArmurerieComponent', () => {
  let component: WeaponArmurerieComponent;
  let fixture: ComponentFixture<WeaponArmurerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponArmurerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponArmurerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
