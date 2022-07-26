import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/module/user';
import { UserService } from 'src/services/userService/user.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) {}

  public userData: User | any;

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (res) => {
        console.log(res);
        this.userData = res.name;
      },
      (error) => error
    );
  }
}
