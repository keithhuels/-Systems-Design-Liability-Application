import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutEquipmentDto } from './create-workout-equipment.dto';

export class UpdateWorkoutEquipmentDto extends PartialType(CreateWorkoutEquipmentDto) {
}
