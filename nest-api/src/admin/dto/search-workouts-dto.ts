import { IsDate, IsNotEmpty } from 'class-validator';

export class SearchWorkoutsDto {
  @IsNotEmpty()
  username: string;
  fromDate: string;
  toDate: string;
}
