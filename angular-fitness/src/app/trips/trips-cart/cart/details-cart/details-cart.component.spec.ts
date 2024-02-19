import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCartComponent } from './details-cart.component';

describe('DetailsCartComponent', () => {
  let component: DetailsCartComponent;
  let fixture: ComponentFixture<DetailsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
