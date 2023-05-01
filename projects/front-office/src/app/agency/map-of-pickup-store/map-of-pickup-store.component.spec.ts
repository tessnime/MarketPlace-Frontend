import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOfPickupStoreComponent } from './map-of-pickup-store.component';

describe('MapOfPickupStoreComponent', () => {
  let component: MapOfPickupStoreComponent;
  let fixture: ComponentFixture<MapOfPickupStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapOfPickupStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapOfPickupStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
