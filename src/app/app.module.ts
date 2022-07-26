import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DebtsComponent } from './components/debts/debts.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ToastComponent } from './components/toast/toast.component';
import { TotalDetailsCardComponent } from './components/total-details-card/total-details-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebtsDetailComponent } from './components/debts-detail/debts-detail.component';
import { RenegotiationsComponent } from './components/renegotiations/renegotiations.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DebtsComponent,
    HomeComponent,
    PaymentComponent,
    ToastComponent,
    TotalDetailsCardComponent,
    DebtsDetailComponent,
    RenegotiationsComponent,
    AboutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
