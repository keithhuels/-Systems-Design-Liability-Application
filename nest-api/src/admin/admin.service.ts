import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CustomException } from '../exceptions/custom-exception';
import { LoginError } from '../exceptions/error.enums';
import { Exercise, User, UserDocument, UserStatus } from '../users/schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { SearchWorkoutsDto } from './dto/search-workouts-dto';
import { DateTime, Settings } from 'luxon';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AdminService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private usersService: UsersService, private mailService: MailService) {
    Settings.throwOnInvalid = true;
  }

  async searchUserWorkouts(searchWorkoutsDto: SearchWorkoutsDto) {
    const user = await this.usersService.findOneByUsername(searchWorkoutsDto.username);

    let matchedWorkouts: Exercise[] = [];


    if (!user) {
      throw new NotFoundException();
    }
    const sortedWorkouts = user.workouts.sort((a, b) => {
      return DateTime.fromJSDate(b.endDate) < DateTime.fromJSDate(a.endDate) ? -1 :  DateTime.fromJSDate(a.endDate) > DateTime.fromJSDate(b.endDate) ? 1 : 0;
    })

    if (!searchWorkoutsDto.toDate && !searchWorkoutsDto.fromDate) {
      return { matchedWorkouts: sortedWorkouts, username: searchWorkoutsDto.username, firstName: user.firstName, lastName: user.lastName, organization: user.organization, email: user.email };
    }



    matchedWorkouts = sortedWorkouts.filter(e => {
      const endDateTime = DateTime.fromJSDate(e.endDate);
      if (searchWorkoutsDto.fromDate && !searchWorkoutsDto.toDate) {
        const fromDateTime = DateTime.fromISO(searchWorkoutsDto.fromDate);
        return fromDateTime <= endDateTime;
      }
      if (searchWorkoutsDto.toDate && !searchWorkoutsDto.fromDate) {
        const toDateTime = DateTime.fromISO(searchWorkoutsDto.toDate);
        return toDateTime >= endDateTime;
      }
      const fromDateTime = DateTime.fromISO(searchWorkoutsDto.fromDate);
      const toDateTime = DateTime.fromISO(searchWorkoutsDto.toDate);
      return fromDateTime <= endDateTime && toDateTime >= endDateTime;
    });
    return { matchedWorkouts: matchedWorkouts, ...searchWorkoutsDto, firstName: user.firstName, lastName: user.lastName, organization: user.organization, email: user.email};
  }

  async createAdminUser(createUserDto: CreateUserDto) {
    const user = await this.usersService.findOneByUsername(createUserDto.username);

    if (user !== null) {
      throw new CustomException(
        'Username is already in use',
        LoginError.LoginFailed
      );
    }
    const createdUser = new this.userModel(createUserDto);
    createdUser.passwordHash = AdminService.hashPassword(createUserDto.password);
    createdUser.status = UserStatus.CheckedOut;
    createdUser.roles.push('user');
    createdUser.roles.push('admin');
    await this.mailService.sendAdminConfirmation(createdUser); //MAIL SERVICE, NEEDS TO BE IN CONTROLLER TOO or other place??? not getting user object, because it's not created?
    return createdUser.save();
  }

  private static hashPassword(password: string) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
  }
}

