import {WorkoutLog} from '../log-exercise/log-exercise.component';

export class MatchedWorkout {
  endDate: string;
  routine: WorkoutLog[];
}

export class UserLookupResponse {
  matchedWorkouts: MatchedWorkout[];
  username: string;
  fromDate: string;
  toDate: string;
}
