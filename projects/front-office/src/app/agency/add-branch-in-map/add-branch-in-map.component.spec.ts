import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBranchInMapComponent } from './add-branch-in-map.component';

describe('AddBranchInMapComponent', () => {
  let component: AddBranchInMapComponent;
  let fixture: ComponentFixture<AddBranchInMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBranchInMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBranchInMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
