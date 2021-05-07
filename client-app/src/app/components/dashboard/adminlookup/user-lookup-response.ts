import {WorkoutLog} from '../log-exercise/log-exercise.component';

export class MatchedWorkout {
  endDate: string;
  routine: WorkoutLog[];
}

export class UserLookupResponse {
  matchedWorkouts: MatchedWorkout[];
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  username: string;
  fromDate: string;
  toDate: string;
}
