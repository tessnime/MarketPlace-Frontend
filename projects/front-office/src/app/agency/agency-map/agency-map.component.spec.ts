import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyMapComponent } from './agency-map.component';

describe('AgencyMapComponent', () => {
  let component: AgencyMapComponent;
  let fixture: ComponentFixture<AgencyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
