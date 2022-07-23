import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Debts } from 'src/app/module/debts';
import { DebtsService } from 'src/services/debtsService/debts.service';

@Component({
  selector: 'app-total-details-card',
  templateUrl: './total-details-card.component.html',
  styleUrls: ['./total-details-card.component.scss'],
})
export class TotalDetailsCardComponent implements OnInit {
  constructor(private debtsService: DebtsService, private http: HttpClient) {}

  public debtsData: Debts | any;

  ngOnInit(): void {
    this.debtsService.getUserDebits().subscribe({
      next: (res) => (this.debtsData = res),
      error: (e) => console.error(e),
    });
  }
}
