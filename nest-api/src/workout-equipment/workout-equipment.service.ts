import { Injectable } from '@nestjs/common';
import { CreateWorkoutEquipmentDto } from './dto/create-workout-equipment.dto';
import { UpdateWorkoutEquipmentDto } from './dto/update-workout-equipment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkoutEquipment, WorkoutEquipmentDocument } from './schema/workout-equipment.schema';

@Injectable()
export class WorkoutEquipmentService {
  constructor(@InjectModel(WorkoutEquipment.name) private workoutEquipmentModel: Model<WorkoutEquipmentDocument>,) {
  }
  create(createWorkoutEquipmentDto: CreateWorkoutEquipmentDto) {
    const createdWorkoutEquipment = new this.workoutEquipmentModel(createWorkoutEquipmentDto);
    return createdWorkoutEquipment.save();
  }

  findAll() {
    return this.workoutEquipmentModel.find();
  }

  findOne(id: string) {
    return this.workoutEquipmentModel.find({_id: id});
  }

  update(id: string, updateWorkoutEquipmentDto: UpdateWorkoutEquipmentDto) {
    return this.workoutEquipmentModel.updateOne({_id: id}, {name: updateWorkoutEquipmentDto.name})
  }

  remove(id: string) {
    return this.workoutEquipmentModel.deleteOne({_id: id});
  }
}
