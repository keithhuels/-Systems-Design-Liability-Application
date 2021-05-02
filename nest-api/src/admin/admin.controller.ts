import { Body, Controller, Delete, Get, Post, Query, Request } from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AdminService } from './admin.service';
import { SearchWorkoutsDto } from './dto/search-workouts-dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {
  }

  @Roles('admin')
  @Get('search-workouts')
  searchUserWorkouts(@Query() req: SearchWorkoutsDto) {
    return this.adminService.searchUserWorkouts(req);
  }

  @Roles('admin')
  @Post('create-admin')
  createAdminUser(@Body() req: CreateUserDto) {
    this.adminService.createAdminUser(req);
  }

  @Roles('admin')
  @Delete('remove-user')
  removeUser(@Request() req: Request) {

  }
}
