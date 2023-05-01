import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAgencyComponent } from './delivery-agency.component';

describe('DeliveryAgencyComponent', () => {
  let component: DeliveryAgencyComponent;
  let fixture: ComponentFixture<DeliveryAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
