import { IsNotEmpty } from 'class-validator';

export class WorkoutLog {
  @IsNotEmpty()
  equipmentName: string;
  @IsNotEmpty()
  duration: number;
  weight?: number;
  sets?: number;
  reps?: number;
}

export class UpdateExerciseLogDto {
  username: string;
  routine: WorkoutLog[];
}
