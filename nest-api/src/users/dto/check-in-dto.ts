import { IsNotEmpty } from 'class-validator';

export class CheckInDto {
  @IsNotEmpty()
  username: string;
  hours?: number;
  minutes?: number;
}
