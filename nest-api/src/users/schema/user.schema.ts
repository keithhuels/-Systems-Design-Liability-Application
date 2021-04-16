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
}

export const UserSchema = SchemaFactory.createForClass(User);

export enum UserStatus {
  LoggedIn,
  LoggedOut,
}
