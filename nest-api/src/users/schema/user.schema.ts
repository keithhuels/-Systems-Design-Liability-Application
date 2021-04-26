import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  organization: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  status: UserStatus;

  @Prop()
  passwordHash: string;

  @Prop()
  waiverAccepted: boolean;

  @Prop()
  workouts: Exercise[];

  @Prop()
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);

export enum UserStatus {
  CheckedIn,
  CheckedOut,
}

export interface WorkoutLog {
  equipmentName: string;
  duration: number;
  weight?: number;
  sets?: number;
  reps?: number;
}

export interface Exercise {
  startDate?: Date;
  endDate: Date;
  routine: WorkoutLog[];
}

export type Role = 'admin' | 'user';
