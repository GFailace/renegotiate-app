import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Debts } from 'src/app/module/debts';

import { DebtsService } from 'src/services/debtsService/debts.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(private debtsService: DebtsService) {}

  public allDebtsDataChange: Debts | any;
  public detailsData: Debts | any;
  public displayDetails: boolean = false;
  public displayOffer: boolean = false;
  public displayPayment: boolean = false;
  public displayUserPaswordInput: boolean = false;
  public password: string = '';
  public totalAmount: number = 0;

  sumDebts() {
    for (let i = 0; i <= this.allDebtsDataChange.length; i++) {
      this.totalAmount = this.totalAmount + this.allDebtsDataChange[i].value;
    }
  }

  onClick() {
    console.log(this.password);
  }

  showDetails() {
    this.debtsService.getUserDebits().subscribe({
      next: (res) => (this.detailsData = res),
      error: (e) => console.error(e),
    });
    this.displayDetails = true;
  }

  closeDetails() {
    this.displayDetails = false;
  }

  showOffer() {
    this.displayOffer = true;
  }

  closeOffer() {
    this.displayOffer = false;
  }

  showPayment() {
    this.displayPayment = true;
  }

  closePayment() {
    this.displayPayment = false;
    this.displayUserPaswordInput = false;
  }

  showUserPasswordInput() {
    this.displayUserPaswordInput = true;
  }

  closeUserPasswordInput() {
    this.displayUserPaswordInput = false;
  }

  showToast() {
    let snack: HTMLElement | any = document.getElementById('toast-error');

    snack.className = 'show';

    setTimeout(function () {
      snack.className = snack.className.replace('show', '');
    }, 3000);
  }

  ngOnInit(): void {
    this.debtsService.getUserDebits().subscribe({
      next: (res) => {
        this.allDebtsDataChange = res;
        this.sumDebts();
      },
      error: (error) => console.error(error),
    });

    console.log(this.password);
  }
}
