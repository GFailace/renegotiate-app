import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Debts } from 'src/app/module/debts';
import { DebtsService } from 'src/services/debtsService/debts.service';
import { RenegotiationsService } from 'src/services/renegotiationsService/renegotiations.service';

@Component({
  selector: 'app-debts-detail',
  templateUrl: './debts-detail.component.html',
  styleUrls: ['./debts-detail.component.scss'],
})
export class DebtsDetailComponent implements OnInit {
  public id: any = '';
  public debtData: Debts | any;
  public displayInstallments: boolean = false;
  public displayPopup: boolean = false;
  public displayPopupInCash: boolean = false;
  public selectedOption: any = 6;
  public acceptTerms: boolean = false;
  public successNegotiation: boolean = false;
  public parcelValue: number = 0;
  public discountInCash: number = 5000;
  public discountParceled: number = 1000;

  options = [
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 },
    { name: '11', value: 11 },
    { name: '12', value: 12 },
  ];

  constructor(
    private route: ActivatedRoute,
    private debtsService: DebtsService,
    private router: Router,
    private renegotiationsService: RenegotiationsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.debtsService.getDebit(Number(this.id)).subscribe({
      next: (res) => {
        this.debtData = res;
        console.log(this.debtData);
      },
      error: (error) => console.error(error),
    });
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

  showPopup() {
    this.displayPopup = true;
  }

  closePopup() {
    this.displayPopup = false;
    this.acceptTerms = false;
  }

  showPopupInCash() {
    this.displayPopupInCash = true;
  }

  closePopupInCash() {
    this.displayPopupInCash = false;
    this.acceptTerms = false;
  }

  setNegotiation(id: number) {
    this.debtsService.setDebitNegotiation(id).subscribe({
      next: (res) => {
        this.renegotiationsService
          .createUserRenegotiation({
            type: 1,
            title: this.debtData[0].title,
            value: this.debtData[0].value,
            settled: false,
            createdAt: '23/07/2022',
            dueDate: '31/12/2022',
          })
          .subscribe({
            error: (error) => console.error(error),
          });
        this.showToastSuccess();
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      },
      error: (error) => {
        this.showToastError();
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      },
    });
  }

  setNegotiationParceled(id: number) {
    this.debtsService.setDebitNegotiation(id).subscribe({
      next: (res) => {
        this.renegotiationsService
          .createUserRenegotiation({
            type: 2,
            title: this.debtData[0].title,
            value: this.debtData[0].value,
            settled: false,
            createdAt: '23/07/2022',
            dueDate: '31/12/2022',
            parcels: this.selectedOption,
            parcelPay: 0,
            parcelValue:
              (this.debtData[0].value + this.debtData[0].fees - 1000) /
              this.selectedOption,
          })
          .subscribe({
            error: (error) => console.error(error),
          });
        this.showToastSuccess();
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      },
      error: (error) => {
        this.showToastError();
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      },
    });
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
}
