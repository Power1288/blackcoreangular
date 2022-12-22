import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceVehicleComponent } from './police-vehicle.component';

describe('PoliceVehicleComponent', () => {
  let component: PoliceVehicleComponent;
  let fixture: ComponentFixture<PoliceVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
