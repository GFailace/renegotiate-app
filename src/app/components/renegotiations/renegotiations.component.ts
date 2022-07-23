import { Component, OnInit } from '@angular/core';
import { Renegotiations } from 'src/app/module/renegotiations';
import { RenegotiationsService } from 'src/services/renegotiationsService/renegotiations.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-renegotiations',
  templateUrl: './renegotiations.component.html',
  styleUrls: ['./renegotiations.component.scss'],
})
export class RenegotiationsComponent implements OnInit {
  constructor(private renegotiationsService: RenegotiationsService) {}

  public renegotiationsData: Renegotiations | any;

  ngOnInit(): void {
    this.renegotiationsService.getAllUserRenegotiations().subscribe({
      next: (res) => {
        this.renegotiationsData = res;
      },
      error: (error) => console.error(error),
    });
  }
}
