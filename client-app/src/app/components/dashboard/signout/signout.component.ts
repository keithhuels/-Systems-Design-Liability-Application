import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }
  onBackClick() {
  this.router.navigate(["dashboard"])
  }
  
  //onSignOutClick
}
