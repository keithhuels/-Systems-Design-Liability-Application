import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { WorkoutEquipmentModule } from './workout-equipment/workout-equipment.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/liability-app'),
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    AuthModule,
    MailModule,
    AdminModule,
    UsersModule,
    WorkoutEquipmentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
