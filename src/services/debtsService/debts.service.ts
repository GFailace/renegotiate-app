import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Debts } from 'src/app/module/debts';

@Injectable({
  providedIn: 'root',
})
export class DebtsService {
  constructor(private http: HttpClient) {}

  public URL: string = 'http://localhost:3000';

  public getAllUserDebits(): Observable<Debts> {
    return this.http.get<Debts>(`${this.URL}/debts`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public getUserDebits(): Observable<Debts> {
    return this.http.get<Debts>(`${this.URL}/debts?settled=false`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public getDebit(id: number): Observable<any> {
    return this.http.get(`${this.URL}/debts?id=${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }
}
