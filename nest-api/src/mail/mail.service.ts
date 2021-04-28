import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
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

  async sendExerciseLog(exercise: Exercise){
    await this.mailerService.sendMail({
      //to: user.email -- when logging is tied in with specific user??
      to: 'kah3dq@umsystem.edu',
      subject: 'GDCI GYM Exercise log for' + exercise.endDate,
      template: './exerciseLog',
      context: {
        date: exercise.endDate,
        routine: exercise.routine,
      },
    });
  }
}
