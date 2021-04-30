import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CustomException } from '../exceptions/custom-exception';
import { LoginError } from '../exceptions/error.enums';
import { Exercise, User, UserDocument, UserStatus } from '../users/schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { SearchWorkoutsDto } from './dto/search-workouts-dto';
import { DateTime } from 'luxon';

@Injectable()
export class AdminService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private usersService: UsersService) {
  }

  async searchUserWorkouts(searchWorkoutsDto: SearchWorkoutsDto) {
    const user = await this.usersService.findOneByUsername(searchWorkoutsDto.username);

    let matchedWorkouts: Exercise[] = [];


    if (!user) {
      throw new NotFoundException();
    }

    if (!searchWorkoutsDto.toDate && !searchWorkoutsDto.fromDate) {
      return { matchedWorkouts: user.workouts, username: searchWorkoutsDto.username };
    }

    const fromDateTime = DateTime.fromHTTP(searchWorkoutsDto.fromDate);
    const toDateTime = DateTime.fromHTTP(searchWorkoutsDto.toDate);

    matchedWorkouts = user.workouts.filter(e => {
      const endDateTime = DateTime.fromJSDate(e.endDate);
      if (searchWorkoutsDto.fromDate && !searchWorkoutsDto.toDate) {
        return fromDateTime < endDateTime;
      }
      if (searchWorkoutsDto.toDate && !searchWorkoutsDto.fromDate) {
        return toDateTime > endDateTime;
      }
      return fromDateTime < endDateTime && toDateTime > endDateTime;
    });
    return { matchedWorkouts: matchedWorkouts, username: searchWorkoutsDto.username };
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
    // await this.mailService.sendUserConfirmation(createdUser); //MAIL SERVICE, NEEDS TO BE IN CONTROLLER TOO or other place??? not getting user object, because it's not created?
    return createdUser.save();
  }

  private static hashPassword(password: string) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
  }
}

