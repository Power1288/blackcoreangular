import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicejobComponent } from './policejob.component';

describe('PolicejobComponent', () => {
  let component: PolicejobComponent;
  let fixture: ComponentFixture<PolicejobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicejobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
