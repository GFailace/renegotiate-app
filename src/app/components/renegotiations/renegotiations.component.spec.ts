import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenegotiationsComponent } from './renegotiations.component';

describe('RenegotiationsComponent', () => {
  let component: RenegotiationsComponent;
  let fixture: ComponentFixture<RenegotiationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenegotiationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenegotiationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
