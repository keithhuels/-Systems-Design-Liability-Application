import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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
  email: string;

  @Prop()
  status: UserStatus;
}

export const UserSchema = SchemaFactory.createForClass(User);

export enum UserStatus {
  LoggedIn,
  LoggedOut
}
