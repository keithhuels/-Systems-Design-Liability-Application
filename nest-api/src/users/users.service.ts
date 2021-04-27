import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CustomException } from '../exceptions/custom-exception';
import { LoginError } from '../exceptions/error.enums';
import { MailService } from './../mail/mail.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateExerciseLogDto } from './dto/update-exercise-log.dto';
import { CheckInDto } from './dto/check-in-dto';
import { DateTime } from 'luxon';
import { UpdateUserDto } from './dto/update-user.dto';
import { Exercise, User, UserDocument, UserStatus } from './schema/user.schema';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private mailService: MailService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.findOneByUsername(createUserDto.username);

    if (user !== null) {
      throw new CustomException(
        'Username is already in use',
        LoginError.LoginFailed
      );
    }
    const createdUser = new this.userModel(createUserDto);
    createdUser.passwordHash = UsersService.hashPassword(createUserDto.password);
    createdUser.status = UserStatus.CheckedOut;
    createdUser.roles.push('user');
    await this.mailService.sendUserConfirmation(createdUser); //MAIL SERVICE, NEEDS TO BE IN CONTROLLER TOO or other place??? not getting user object, because it's not created?
    return createdUser.save();
  }

  private static hashPassword(password: string) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOneByEmail(email: string) {
    return this.userModel.findOne({ email: email }, (err, user) => {
      this.logger.log('user ' + user, 'error: ' + err);
    });
  }

  findOneByUsername(username: string) {
    return this.userModel.findOne({ username: username }, (err, user) => {
      this.logger.log('user ' + user, 'error: ' + err);
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findOneById(id: string) {
    return this.userModel.findOne({ _id: id }, (err, user) => {
      this.logger.log('user ' + user, 'error: ' + err);
    });
  }

  async updateExerciseList(exerciseLogDto: UpdateExerciseLogDto) {
    if (exerciseLogDto.routine === undefined || exerciseLogDto.routine === null) {
      throw new BadRequestException(exerciseLogDto.routine, 'Parameter routine should not be null');
    }
    const user = await this.findOneByUsername(exerciseLogDto.username);

    if (!user) {
      throw new NotFoundException(exerciseLogDto.username, 'User not found.');
    }
    const exercise: Exercise = {
      endDate: new Date(),
      routine: exerciseLogDto.routine,
    };
    user.workouts.push(exercise);
    user.status = this.toggleUserStatus(user.status);
    user.save();
    return user.workouts;
  }

  private toggleUserStatus(status: UserStatus) {
    if (status === UserStatus.CheckedIn) {
      return UserStatus.CheckedOut;
    } else {
      return UserStatus.CheckedIn;
    }
  }

  async verifyUserStatus(body) {
    const user: UserDocument = await this.findOneByUsername(body.username).exec();
    if (body.userStatus === null || body.userStatus === undefined) {
      throw new BadRequestException();
    }
    if (user.status === body.userStatus) {
      throw new CustomException('Incorrect Status', '400');
    }
  }

  async checkIn(checkInDto: CheckInDto) {
    const user: UserDocument = await this.findOneByUsername(checkInDto.username).exec();
    user.status = this.toggleUserStatus(user.status);
    const checkOutTime = DateTime.now().plus({hours: checkInDto.hours, minutes: checkInDto.minutes});
    user.dailyTimeOut = checkOutTime.toJSDate();
    await user.save();
    return user;
  }
}
