import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DebtsDetailComponent } from './debts-detail.component';
import { HeaderComponent } from '../header/header.component';
import { ToastComponent } from '../toast/toast.component';

describe('DebtsDetailComponent', () => {
  let component: DebtsDetailComponent;
  let fixture: ComponentFixture<DebtsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [DebtsDetailComponent, HeaderComponent, ToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DebtsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Renderizar componente', () => {
    expect(component).toBeTruthy();
  });
});
