import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalService} from '../modal/modal.service';
import {FormControl, FormGroup} from '@angular/forms';

export interface WorkoutEquipment {
  name: string;
}

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss'],
})
// const slider = new MDCSlider(document.querySelector('.mdc-slider'));
export class SignoutComponent implements OnInit {
  form: FormGroup;

  workoutEquipment: WorkoutEquipment[] = [
    {
      name: 'bike',
    },
  ];

  constructor(
    private readonly router: Router,
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      machineName: new FormControl(''),
      duration: new FormControl(0),
      weight: new FormControl(0),
      sets: new FormControl(0),
      reps: new FormControl(0)
    });
  }
  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + "min";
    }

    return value;
  }


  onBackClick() {
    this.router.navigate(['dashboard']);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  //log exercise info in database, close modal and sign out in user list
  logAndCloseModal(id: string) {
    this.modalService.close(id);
    this.router.navigate(['dashboard']);
  }

  // onNeedHelpClick() {
  //   this.router.navigate()
  // }
}
