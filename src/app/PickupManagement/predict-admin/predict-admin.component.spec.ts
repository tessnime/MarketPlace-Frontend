import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictAdminComponent } from './predict-admin.component';

describe('PredictAdminComponent', () => {
  let component: PredictAdminComponent;
  let fixture: ComponentFixture<PredictAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
