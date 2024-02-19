import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsCartComponent } from './trips-cart.component';

describe('TripsCartComponent', () => {
  let component: TripsCartComponent;
  let fixture: ComponentFixture<TripsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
