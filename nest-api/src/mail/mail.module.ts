import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { MailService } from './mail.service';
import {HandlebarsAdapter} from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import {ConfigService} from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
        useFactory: async (config: ConfigService)=>({
        transport: {
          host: config.get('MAIL_HOST'),
          secure: false,
      
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASSWORD'),
          },
        },
        defaults: {
          from: `"GDCI Gym" <${config.get('MAIL_FROM')}>`,
        },
        template: {
          dir: join(__dirname, '../../mail/templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
