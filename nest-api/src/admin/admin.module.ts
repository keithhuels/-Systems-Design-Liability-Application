import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../auth/roles.guard';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/schema/user.schema';
import { MailModule} from '../mail/mail.module'


@Module({
  controllers: [AdminController],
  providers: [AdminService,  { provide: APP_GUARD, useClass: RolesGuard }],
  imports: [UsersModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), MailModule]
})
export class AdminModule {

}
