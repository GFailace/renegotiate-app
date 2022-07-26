import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PaymentComponent } from './payment.component';
import { HeaderComponent } from '../header/header.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [PaymentComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Renderizar componente', () => {
    expect(component).toBeTruthy();
  });

  it('Verificar título', () => {
    const title = fixture.debugElement.nativeElement.querySelector('#title');
    expect(title.innerHTML).toEqual('Renegociar todas as dívidas');
  });

  it('Renderizar container', () => {
    const title =
      fixture.debugElement.nativeElement.querySelector('.actionCard');
    expect(title).toBeTruthy();
  });
});
