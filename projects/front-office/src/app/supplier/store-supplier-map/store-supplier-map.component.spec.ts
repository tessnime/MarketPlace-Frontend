import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSupplierMapComponent } from './store-supplier-map.component';

describe('StoreSupplierMapComponent', () => {
  let component: StoreSupplierMapComponent;
  let fixture: ComponentFixture<StoreSupplierMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSupplierMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreSupplierMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
