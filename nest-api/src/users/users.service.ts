import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument, UserStatus } from './schema/user.schema';
import { Model } from 'mongoose';
import { CustomException } from '../exceptions/custom-exception';
import { LoginError } from '../exceptions/error.enums';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.findOneByEmail(createUserDto.email);

    if (user !== null) {
      throw new CustomException(
        'Email is already in use',
        LoginError.LoginFailed
      );
    }
    const createdUser = new this.userModel(createUserDto);
    createdUser.passwordHash = UsersService.hashPassword(createUserDto.password);
    createdUser.status = UserStatus.LoggedOut;
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
}
