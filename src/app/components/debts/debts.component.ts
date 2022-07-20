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
  public modalData: any;
  public totalDebts: number | any;

  showModalDialog(id: number) {
    this.debtsService.getDebit(id).subscribe({
      next: (res) => (this.modalData = res),
      error: (e) => console.error(e),
    });
    console.log(this.modalData);
    this.displayModal = true;
  }

  showGroupedModalDialog() {
    this.displayGroupedModal = true;
    let total: number = 0;
    for (let i = 0; i <= this.openDebtsData.length; i++) {
      total = total + this.openDebtsData[i].value;
      this.totalDebts = total;
    }
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
    this.debtsService.getUserDebits().subscribe(
      (res) => (this.openDebtsData = res),
      (error) => error
    );
  }
}
