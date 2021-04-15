import { Component, OnInit } from "@angular/core";
import {Router, RouterOutlet} from '@angular/router';
import {RouteFade} from '../shared/route-fade-animation';
import {trigger} from '@angular/animations';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [trigger('routeFade', RouteFade)]
})
export class DashboardComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}


  prepareOutlet(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
