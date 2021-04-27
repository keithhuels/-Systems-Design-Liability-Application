import {UserStatus} from '../dashboard/user-list/user-list.component';

export class UserToken {
  username: string;
  sub: string;
  roles: string[];
  email: string;
  status: UserStatus;
  iat: Date;
  exp: Date;
}
