import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DebtsDetailComponent } from './components/debts-detail/debts-detail.component';
import { PaymentComponent } from './components/payment/payment.component';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pagamento', component: PaymentComponent },
  { path: 'pagamento/:id', component: DebtsDetailComponent },
  { path: 'sobre', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
