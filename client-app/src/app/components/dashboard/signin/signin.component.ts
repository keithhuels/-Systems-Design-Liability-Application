import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {AuthService} from '../../../services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly router: Router, private readonly authService: AuthService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onBackClick() {
    this.router.navigate(["dashboard"]);
  }

  //authenticate user, if user is authenticated, send to log time page
  onSignInClick() {
    const formVal = this.form.value;
    if (formVal.username && formVal.password ) {
      this.authService.login(formVal.username, formVal.password)
        .subscribe(
          () => {
            console.log("user is logged in");
            this.router.navigate(["dashboard", "logtime"]);
          },
          () => {
            // Display Login Failed
          }
        );
    }
  }
   // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}
