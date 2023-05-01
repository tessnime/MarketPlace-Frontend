import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerOfPickupComponent } from './buyer-of-pickup.component';

describe('BuyerOfPickupComponent', () => {
  let component: BuyerOfPickupComponent;
  let fixture: ComponentFixture<BuyerOfPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerOfPickupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerOfPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
