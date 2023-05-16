import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeliveryMenOfPickupComponent } from './view-delivery-men-of-pickup.component';

describe('ViewDeliveryMenOfPickupComponent', () => {
  let component: ViewDeliveryMenOfPickupComponent;
  let fixture: ComponentFixture<ViewDeliveryMenOfPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDeliveryMenOfPickupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDeliveryMenOfPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
