import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginVm } from '../models/viewmodels/LoginVm';
import { UserDocument } from '../users/schema/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) { }

  async validateUser(loginVm: LoginVm): Promise<boolean> {
    const user: UserDocument = await this.usersService.findOneByEmail(loginVm.email);
    if (!user) {
      return false;
    }
    return bcrypt.compareSync(loginVm.password, user.passwordHash);
  }
}
