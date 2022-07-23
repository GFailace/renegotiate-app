import { Component, OnInit } from '@angular/core';
import { Debts } from 'src/app/module/debts';

import { DebtsService } from 'src/services/debtsService/debts.service';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss'],
})
export class DebtsComponent implements OnInit {
  constructor(private debtsService: DebtsService) {}

  public allDebtsData: Debts | any;
  public openDebtsData: Debts | any;
  public displayModal: boolean | any;
  public displayGroupedModal: boolean | any;
  public modalData: Debts | any;
  public totalDebts: number = 0;

  showModalDialog(id: number) {
    this.debtsService.getDebit(id).subscribe({
      next: (res) => (this.modalData = res),
      error: (e) => console.error(e),
    });
    this.displayModal = true;
  }

  sumDebts() {
    for (let i = 0; i <= this.openDebtsData.length; i++) {
      this.totalDebts = this.totalDebts + this.openDebtsData[i].value;
    }
  }

  showGroupedModalDialog() {
    this.displayGroupedModal = true;
    this.sumDebts();
  }

  closeGroupedModalDialog() {
    this.displayGroupedModal = false;
  }

  closeModalDialog() {
    this.modalData = '';
    this.displayModal = false;
  }

  ngOnInit(): void {
    this.debtsService.getAllUserDebits().subscribe(
      (res) => (this.allDebtsData = res),
      (error) => error
    );

    this.debtsService.getUserDebits().subscribe({
      next: (res) => {
        this.openDebtsData = res;
        this.sumDebts();
      },
      error: (error) => console.error(error),
    });
  }
}
