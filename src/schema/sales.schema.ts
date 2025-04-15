import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SalesDocument = HydratedDocument<Sales>;

@Schema()
export class Sales {
  @Prop()
  productId: string;

  @Prop()
  item: string;

  @Prop()
  customerName: string;

  @Prop()
  date: Date;

  @Prop()
  pricePerUnit: number;

  @Prop()
  quantity: number;

  @Prop()
  category: string;
}

export const SalesSchema = SchemaFactory.createForClass(Sales);
