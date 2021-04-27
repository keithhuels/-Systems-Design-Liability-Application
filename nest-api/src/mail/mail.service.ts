import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { UserDocument } from 'src/users/schema/user.schema';

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
}
