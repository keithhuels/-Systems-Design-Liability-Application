import { IsNotEmpty } from 'class-validator';

export class CreateWorkoutEquipmentDto {
  @IsNotEmpty()
  name: string;
}
