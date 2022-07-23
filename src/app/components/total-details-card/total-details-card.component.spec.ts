import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDetailsCardComponent } from './total-details-card.component';

describe('TotalDetailsCardComponent', () => {
  let component: TotalDetailsCardComponent;
  let fixture: ComponentFixture<TotalDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
