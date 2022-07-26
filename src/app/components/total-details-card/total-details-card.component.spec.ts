import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TotalDetailsCardComponent } from './total-details-card.component';
import { HeaderComponent } from '../header/header.component';

describe('TotalDetailsCardComponent', () => {
  let component: TotalDetailsCardComponent;
  let fixture: ComponentFixture<TotalDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TotalDetailsCardComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Renderizar componente', () => {
    expect(component).toBeTruthy();
  });
});
