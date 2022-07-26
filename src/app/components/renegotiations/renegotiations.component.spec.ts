import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RenegotiationsComponent } from './renegotiations.component';
import { HeaderComponent } from '../header/header.component';

describe('RenegotiationsComponent', () => {
  let component: RenegotiationsComponent;
  let fixture: ComponentFixture<RenegotiationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [RenegotiationsComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RenegotiationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Renderizar componente', () => {
    expect(component).toBeTruthy();
  });
});
