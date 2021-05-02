import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorkoutEquipmentDocument = WorkoutEquipment & Document;

@Schema({ collection: 'workout-equipment' })
export class WorkoutEquipment {
  @Prop()
  name: string;
}

export const WorkoutEquipmentSchema = SchemaFactory.createForClass(WorkoutEquipment)
