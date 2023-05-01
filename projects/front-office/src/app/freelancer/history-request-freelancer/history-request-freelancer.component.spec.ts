import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRequestFreelancerComponent } from './history-request-freelancer.component';

describe('HistoryRequestFreelancerComponent', () => {
  let component: HistoryRequestFreelancerComponent;
  let fixture: ComponentFixture<HistoryRequestFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryRequestFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryRequestFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
