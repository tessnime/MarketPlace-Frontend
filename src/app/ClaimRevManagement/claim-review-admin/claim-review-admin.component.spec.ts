import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimReviewAdminComponent } from './claim-review-admin.component';

describe('ClaimReviewAdminComponent', () => {
  let component: ClaimReviewAdminComponent;
  let fixture: ComponentFixture<ClaimReviewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimReviewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimReviewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
