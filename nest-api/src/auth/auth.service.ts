import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginVm } from '../models/viewmodels/LoginVm';
import { UserDocument } from '../users/schema/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) { }

  async validateUser(loginVm: LoginVm): Promise<any> {
    const user: UserDocument = await this.usersService.findOneByUsername(loginVm.username).exec();
    if (!user) {
      return null;
    }
    // Save status of user as active
    // Return {userId: sadsadasda, authenticated: boolean}
    // -- Front end --
    // 1.  Grab the current list of authenticated users from session storage
    // 2. Add this response to the list.
    // 3. Save to session storage.  [ { userId: david, authenticated: boolean } , {userId: keith, authenticated: boolean }     ]
    const verified = bcrypt.compareSync(loginVm.password, user.passwordHash);
    if (verified) {
      const {passwordHash, ...result} = user;
      return result;
    }
    return null;
  }

  async login(user) {
    const payload = {username: user._doc.username, sub: user._doc._id, roles: user._doc.roles, email: user._doc.email};
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
