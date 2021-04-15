import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginVm } from '../models/viewmodels/LoginVm';
import { CustomException } from '../exceptions/custom-exception';
import { LoginError } from '../exceptions/error.enums';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post()
  async authenticate(@Body() loginVm: LoginVm) {
    const isAuthenticated = await this.authService.validateUser(loginVm);
    if (!isAuthenticated) {
      throw new CustomException('Invalid Username or Password', LoginError.LoginFailed);
    }
    return 'User is Authenticated';
  }
}
