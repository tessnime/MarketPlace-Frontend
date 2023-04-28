import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresListComponent } from './stores-list.component';

describe('StoresListComponent', () => {
  let component: StoresListComponent;
  let fixture: ComponentFixture<StoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
