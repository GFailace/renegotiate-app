import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Renegotiations } from 'src/app/module/renegotiations';

@Injectable({
  providedIn: 'root',
})
export class RenegotiationsService {
  constructor(private http: HttpClient) {}

  public URL: string = 'http://localhost:3000';

  public getAllUserRenegotiations(): Observable<Renegotiations> {
    return this.http.get<Renegotiations>(`${this.URL}/renegotiations`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public createUserRenegotiation(
    renegotiation: Renegotiations
  ): Observable<Renegotiations> {
    return this.http
      .post<Renegotiations>(`http://localhost:3000/renegotiations`, renegotiation)
      .pipe(
        (res) => res,
        (error) => error
      );
  }
}
