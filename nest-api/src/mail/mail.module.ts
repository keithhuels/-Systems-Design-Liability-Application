import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MailService } from './mail.service';
import {HandlebarsAdapter} from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'

@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      // useFactory: async (config: ConfigService) => ({
        // transport: config.get("MAIL_TRANSPORT"),
        // or
        transport: {
          host: 'smtp.sendgrid.net',
          secure: false,
      
          auth: {
            user: 'apikey',
            pass: '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'
          },
        },
        defaults: {
          from: `"GDCI Gym" <gdci-gym@outlook.com>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
    // }),
      // inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
