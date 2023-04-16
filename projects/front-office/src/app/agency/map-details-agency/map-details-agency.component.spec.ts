import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetailsAgencyComponent } from './map-details-agency.component';

describe('MapDetailsAgencyComponent', () => {
  let component: MapDetailsAgencyComponent;
  let fixture: ComponentFixture<MapDetailsAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDetailsAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapDetailsAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
