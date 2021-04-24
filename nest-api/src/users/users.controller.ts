import { MailService } from './../mail/mail.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateExerciseLogDto } from './dto/update-exercise-log.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
