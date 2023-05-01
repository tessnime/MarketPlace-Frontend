import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowclaimsComponent } from './showclaims.component';

describe('ShowclaimsComponent', () => {
  let component: ShowclaimsComponent;
  let fixture: ComponentFixture<ShowclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowclaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
