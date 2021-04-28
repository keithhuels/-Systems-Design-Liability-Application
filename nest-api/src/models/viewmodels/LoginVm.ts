import {  IsNotEmpty } from 'class-validator';

export class LoginVm {
  @IsNotEmpty()
  public username: string;
  @IsNotEmpty()
  public password: string;
}
