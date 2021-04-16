import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../modal/modal.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../user-list/user-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private readonly router: Router, private readonly modalService: ModalService, private readonly http: HttpClient) {
  }

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      organization: new FormControl('', [Validators.required]),
      waiverAccepted: new FormControl(false, [Validators.required, Validators.requiredTrue])
    });
  }

  onBackClick() {
    this.router.navigate(['dashboard']);
  }

  onLiabilityClick() {
    this.modalService.open('custom-modal-2');
  }

  onCreateAccountClicked() {
    this.http.post<User>('users', this.form.value).subscribe((response) => console.log(response), (err) => {
      console.log(err);
    });
  }

  //do not allow unless waiver is accepted

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
  acceptAndCloseModal(id: string) {
    this.modalService.close(id);
  }

  getErrorMessage() {
    return 'This field must be filled out.';
  }
}
