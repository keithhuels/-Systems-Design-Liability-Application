import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ModalService} from '../modal/modal.service';
import {AuthService} from '../../../services/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserStatus} from '../user-list/user-list.component';


@Component({
  selector: 'app-signout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
// const slider = new MDCSlider(document.querySelector('.mdc-slider'));
export class CheckoutComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly router: Router,
    private modalService: ModalService,
    private readonly http: HttpClient,
    private readonly authService: AuthService,
    private readonly matSnackbar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onBackClick() {
    this.router.navigate(['dashboard']);
  }

  beginCheckoutProcess() {
    const formVal = this.form.value;
    if (formVal.username && formVal.password) {
      this.authService.login(formVal.username, formVal.password).subscribe(() => {
        this.router.navigate(['dashboard', 'log-exercise']);
      }, (err) => {
        console.log(err);
        this.matSnackbar.open('Invalid Username or Password', 'Ok', {
          duration: 3000
        });
      });
    }
  }
}
