
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post, Request, UseGuards,
  ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateExerciseLogDto } from './dto/update-exercise-log.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CheckInDto } from './dto/check-in-dto';
import { Roles } from '../auth/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/standard-users')
  findStandardUsers() {
    return this.usersService.findStandardUsers();
  }


  @UseGuards(JwtAuthGuard)
  @Post('/log-exercise')
  updateWorkout(@Body() updateWorkout: UpdateExerciseLogDto) {
    return this.usersService.updateExerciseList(updateWorkout);
  }

  @UseGuards(JwtAuthGuard)
  @Get('workout-data')
  getWorkoutData(@Request() req) {
    return req.user
  }

  @UseGuards(JwtAuthGuard)
  @Post('/checkin')
  checkin(@Body() checkInDto: CheckInDto) {
    return this.usersService.checkIn(checkInDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/checkout')
  checkout(@Body() updateWorkout: UpdateExerciseLogDto) {
    return this.usersService.updateExerciseList(updateWorkout);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.usersService.findOneById(id);
    } catch (err) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Roles('admin')
  @Delete(':username')
  remove(@Param('username') username: string, @Request() req) {
    return this.usersService.removeByUsername(username, req);
  }
}
