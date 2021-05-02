import { Module } from '@nestjs/common';
import { WorkoutEquipmentService } from './workout-equipment.service';
import { WorkoutEquipmentController } from './workout-equipment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkoutEquipment, WorkoutEquipmentSchema } from './schema/workout-equipment.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: WorkoutEquipment.name, schema: WorkoutEquipmentSchema }])],
  controllers: [WorkoutEquipmentController],
  providers: [WorkoutEquipmentService]
})
export class WorkoutEquipmentModule {}
