import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DebtsComponent } from './debts.component';
import { HeaderComponent } from '../header/header.component';
import { By } from '@angular/platform-browser';

describe('DebtsComponent', () => {
  let component: DebtsComponent;
  let fixture: ComponentFixture<DebtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [DebtsComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DebtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Renderizar componente', () => {
    expect(component).toBeTruthy();
  });

  it('Verificar título', () => {
    const title = fixture.debugElement.nativeElement.querySelector('#title');
    expect(title.innerHTML).toEqual('Suas Pendências');
  });
});
