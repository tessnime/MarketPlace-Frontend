import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMenComponent } from './delivery-men.component';

describe('DeliveryMenComponent', () => {
  let component: DeliveryMenComponent;
  let fixture: ComponentFixture<DeliveryMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
