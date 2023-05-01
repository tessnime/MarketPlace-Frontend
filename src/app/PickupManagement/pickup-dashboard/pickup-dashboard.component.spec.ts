import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupDashboardComponent } from './pickup-dashboard.component';

describe('PickupDashboardComponent', () => {
  let component: PickupDashboardComponent;
  let fixture: ComponentFixture<PickupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
