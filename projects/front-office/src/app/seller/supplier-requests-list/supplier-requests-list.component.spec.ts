import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierRequestsListComponent } from './supplier-requests-list.component';

describe('SupplierRequestsListComponent', () => {
  let component: SupplierRequestsListComponent;
  let fixture: ComponentFixture<SupplierRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierRequestsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
