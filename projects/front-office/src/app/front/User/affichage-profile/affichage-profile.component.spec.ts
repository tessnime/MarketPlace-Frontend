import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageProfileComponent } from './affichage-profile.component';

describe('AffichageProfileComponent', () => {
  let component: AffichageProfileComponent;
  let fixture: ComponentFixture<AffichageProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
