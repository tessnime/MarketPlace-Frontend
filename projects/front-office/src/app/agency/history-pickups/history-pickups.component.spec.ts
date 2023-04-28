import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPickupsComponent } from './history-pickups.component';

describe('HistoryPickupsComponent', () => {
  let component: HistoryPickupsComponent;
  let fixture: ComponentFixture<HistoryPickupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPickupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPickupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
