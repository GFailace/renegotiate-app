import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/module/user';
import { UserService } from 'src/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.formGroup = this.formBuilder.group({
      account: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public userData: User | any;
  public formGroup: FormGroup | any;

  loginUser() {
    if (
      this.formGroup.value.account === this.userData.account &&
      this.formGroup.value.password === this.userData.password
    ) {
      this.router.navigate(['']);
    } else {
      this.showToastError();
      this.formGroup.value.account = '';
      this.formGroup.value.password = '';
    }
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (res) => {
        this.userData = res;
        console.log(res);
      },
      error: (error) => console.error(error),
    });
  }

  showToastError() {
    let snack: HTMLElement | any = document.getElementById('toast-error-login');

    snack.className = 'show';

    setTimeout(function () {
      snack.className = snack.className.replace('show', '');
    }, 3000);
  }
}
