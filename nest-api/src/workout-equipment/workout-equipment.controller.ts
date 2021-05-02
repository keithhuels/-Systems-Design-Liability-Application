import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutEquipmentService } from './workout-equipment.service';
import { CreateWorkoutEquipmentDto } from './dto/create-workout-equipment.dto';
import { UpdateWorkoutEquipmentDto } from './dto/update-workout-equipment.dto';
import { Roles } from '../auth/roles.decorator';

@Controller('workout-equipment')
export class WorkoutEquipmentController {
  constructor(private readonly workoutEquipmentService: WorkoutEquipmentService) {}

  @Roles('admin')
  @Post()
  create(@Body() createWorkoutEquipmentDto: CreateWorkoutEquipmentDto) {
    return this.workoutEquipmentService.create(createWorkoutEquipmentDto);
  }

  @Get()
  findAll() {
    return this.workoutEquipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workoutEquipmentService.findOne(id);
  }

  @Roles('admin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutEquipmentDto: UpdateWorkoutEquipmentDto) {
    return this.workoutEquipmentService.update(id, updateWorkoutEquipmentDto);
  }

  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutEquipmentService.remove(id);
  }
}
