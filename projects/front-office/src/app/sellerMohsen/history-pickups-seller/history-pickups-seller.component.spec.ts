import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPickupsSellerComponent } from './history-pickups-seller.component';

describe('HistoryPickupsSellerComponent', () => {
  let component: HistoryPickupsSellerComponent;
  let fixture: ComponentFixture<HistoryPickupsSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPickupsSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPickupsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
