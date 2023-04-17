import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupListGridComponent } from './pickup-list-grid.component';

describe('PickupListGridComponent', () => {
  let component: PickupListGridComponent;
  let fixture: ComponentFixture<PickupListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupListGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
