import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DebtsComponent } from './components/debts/debts.component';
import { DebtCardComponent } from './components/debt-card/debt-card.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ToastComponent } from './components/toast/toast.component';
import { TotalDetailsCardComponent } from './components/total-details-card/total-details-card.component';
import { FormsModule } from '@angular/forms';
import { DebtsDetailComponent } from './components/debts-detail/debts-detail.component';
import { RenegotiationsComponent } from './components/renegotiations/renegotiations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DebtsComponent,
    DebtCardComponent,
    HomeComponent,
    PaymentComponent,
    ToastComponent,
    TotalDetailsCardComponent,
    DebtsDetailComponent,
    RenegotiationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    DialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
