import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSupplierListComponent } from './product-supplier-list.component';

describe('ProductSupplierListComponent', () => {
  let component: ProductSupplierListComponent;
  let fixture: ComponentFixture<ProductSupplierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSupplierListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
