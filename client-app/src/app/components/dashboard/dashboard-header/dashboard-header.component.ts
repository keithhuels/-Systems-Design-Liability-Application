import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  now: Date = new Date();

  constructor(private readonly router: Router) {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnInit(): void {
  }

  onCoverPageClicked() {
    this.router.navigate([''])
  }
}
