import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post, Request, UseGuards,
  ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UpdateExerciseLogDto } from './dto/update-exercise-log.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiResponse({
    status: 201,
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/log-exercise')
  updateWorkout(@Body() updateWorkout: UpdateExerciseLogDto) {
    return this.usersService.updateExerciseList(updateWorkout);
  }

  @UseGuards(JwtAuthGuard)
  @Get('workout-data')
  getWorkoutData(@Request() req) {
    return req.user
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
