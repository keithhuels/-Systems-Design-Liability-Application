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
    // Save status of user as active
    // Return {userId: sadsadasda, authenticated: boolean}
    // -- Front end --
    // 1.  Grab the current list of authenticated users from session storage
    // 2. Add this response to the list.
    // 3. Save to session storage.  [ { userId: david, authenticated: boolean } , {userId: keith, authenticated: boolean }     ]
    return bcrypt.compareSync(loginVm.password, user.passwordHash);
  }
}
