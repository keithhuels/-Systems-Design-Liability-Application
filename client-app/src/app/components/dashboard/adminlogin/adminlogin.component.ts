import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss'],
})
export class AdminloginComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly router: Router, private readonly authService: AuthService, private readonly matSnackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onBackClick() {
    this.router.navigate(['']);
  }

  onLogInClick() {
    const formVal = this.form.value;
    if (formVal.username && formVal.password) {
      this.authService.login(formVal.username, formVal.password).subscribe(() => {
        this.router.navigate(['dashboard', 'adminlookup']);
      }, (err) => {
        this.matSnackbar.open('Invalid Username or Password', 'Ok', {
          duration: 3000
        });
      });
    }
  }

  onHelpClick() {
    //contextualhelplink
  }

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}
