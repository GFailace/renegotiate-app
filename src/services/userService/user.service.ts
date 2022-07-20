import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/module/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public URL: string = 'http://localhost:3000';

  public getUser(): Observable<User> {
    return this.http.get<User>(`${this.URL}/users`).pipe(
      (res) => res,
      (error) => error
    );
  }
}
