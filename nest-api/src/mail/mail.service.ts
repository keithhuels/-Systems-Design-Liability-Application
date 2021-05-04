import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
import { Exercise, UserDocument } from 'src/users/schema/user.schema';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: UserDocument) {
    

    await this.mailerService.sendMail({
      to: user.email,
      
      subject: 'Welcome to the GDCI Gym App! Confirm your Email',
      template: './confirmation', 
      context: {
        name: user.firstName,
      },
    });
  }

  async sendAdminConfirmation(user: UserDocument) {
    

    await this.mailerService.sendMail({
      to: user.email,
      
      subject: 'Welcome to the GDCI Gym App! Confirm your Email',
      template: './adminConfirmation', 
      context: {
        firstName: user.firstName,
        lastName: user.lastName

      },
    });
  }

  async sendExerciseLog(exercise: Exercise, user:UserDocument){
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'GDCI GYM Exercise log for ' + exercise.endDate,
      template: './exerciseLog',
      context: {
        date: DateTime.fromJSDate(exercise.endDate).toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
        routine: exercise.routine,
        name: user.firstName
      },
    });
  }
}
