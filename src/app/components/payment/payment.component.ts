import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Debts } from 'src/app/module/debts';

import { DebtsService } from 'src/services/debtsService/debts.service';
import { RenegotiationsService } from 'src/services/renegotiationsService/renegotiations.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(
    private debtsService: DebtsService,
    private router: Router,
    private renegotiationsService: RenegotiationsService
  ) {}

  public allDebtsDataChange: Debts | any;
  public detailsData: Debts | any;
  public displayDetails: boolean = false;
  public displayOffer: boolean = false;
  public displayPayment: boolean = false;
  public displayInstallments: boolean = false;
  public password: string = '';
  public totalAmount: number = 0;
  public discountInCash: number = 5000;
  public discountParceled: number = 1000;
  public acceptTerms: boolean = false;
  public successNegotiation: boolean = false;
  public parcelValue: number = 0;
  public selectedOption: any = 6;

  options = [
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 },
    { name: '11', value: 11 },
    { name: '12', value: 12 },
  ];

  sumDebts() {
    for (let i = 0; i <= this.allDebtsDataChange.length; i++) {
      this.totalAmount =
        this.totalAmount +
        this.allDebtsDataChange[i].value +
        this.allDebtsDataChange[i].fees;
    }
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

  selectOption(value: Event) {
    this.selectedOption = value;
    console.log(this.selectedOption);
  }

  showInstallments() {
    this.displayInstallments = true;
  }

  closeInstallments() {
    this.displayInstallments = false;
    this.acceptTerms = false;
  }

  closePayment() {
    this.displayPayment = false;
  }

  showToastSuccess() {
    let snack: HTMLElement | any = document.getElementById('toast-success');

    snack.className = 'show';

    setTimeout(function () {
      snack.className = snack.className.replace('show', '');
    }, 3000);
  }

  showToastError() {
    let snack: HTMLElement | any = document.getElementById('toast-error');

    snack.className = 'show';

    setTimeout(function () {
      snack.className = snack.className.replace('show', '');
    }, 3000);
  }

  downloadTicket() {
    const link = document.createElement('a');
    link.setAttribute('target', '_self');
    link.setAttribute('href', '../../../assets/Boleto.pdf');
    link.setAttribute('download', `Boleto Renegociação.pdf`);
    link.click();
    link.remove();
  }

  setNegotiationCash() {
    this.downloadTicket();
    this.renegotiationsService
      .createUserRenegotiation({
        type: 1,
        title: 'Agrupamento das Dívidas',
        value: this.totalAmount - this.discountInCash,
        settled: false,
        createdAt: '23/07/2022',
        dueDate: '31/12/2022',
      })
      .subscribe({
        error: (error) => console.error(error),
      });
    for (let i = 0; i <= this.allDebtsDataChange.length; i++) {
      this.debtsService
        .setDebitNegotiation(this.allDebtsDataChange[i].id)
        .subscribe({
          next: (res) => {
            this.showToastSuccess();
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000);
          },
          error: (error) => console.error(error),
        });
    }
  }

  setNegotiationParceled() {
    this.downloadTicket();
    this.renegotiationsService
      .createUserRenegotiation({
        type: 2,
        title: 'Agrupamento das Dívidas',
        value: this.totalAmount - this.discountParceled,
        settled: false,
        createdAt: '23/07/2022',
        dueDate: '31/12/2022',
        parcels: this.selectedOption,
        parcelPay: 0,
        parcelValue:
          (this.totalAmount - this.discountParceled) / this.selectedOption,
      })
      .subscribe({
        error: (error) => console.error(error),
      });
    for (let i = 0; i <= this.allDebtsDataChange.length; i++) {
      this.debtsService
        .setDebitNegotiation(this.allDebtsDataChange[i].id)
        .subscribe({
          next: (res) => {
            this.showToastSuccess();
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000);
          },
          error: (error) => console.error(error),
        });
    }
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
