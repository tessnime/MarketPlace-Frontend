import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPickupsFreelancerComponent } from './history-pickups-freelancer.component';

describe('HistoryPickupsFreelancerComponent', () => {
  let component: HistoryPickupsFreelancerComponent;
  let fixture: ComponentFixture<HistoryPickupsFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPickupsFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPickupsFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
