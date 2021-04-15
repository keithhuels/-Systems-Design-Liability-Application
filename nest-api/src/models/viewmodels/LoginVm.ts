import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginVm {
  @IsEmail()
  public email: string;
  @IsNotEmpty()
  public password: string;
}
