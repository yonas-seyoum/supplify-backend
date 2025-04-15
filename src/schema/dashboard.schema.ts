import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SalesOverview } from 'src/sales/dto/sales.dto';

export type DashBoardDocument = HydratedDocument<DashBoard>;

@Schema()
export class DashBoard {
  @Prop()
  totalProducts: number;

  @Prop()
  salesOverview: Array<SalesOverview>;

  @Prop()
  activeSuppliers: number;

  @Prop()
  lowStockItems: [
    {
      product: {
        name: string;
        stockLevel: {
          available: number;
          maximum: number;
          status: string;
        };
      };
    },
  ];

  @Prop()
  totalNumberOfLowStockItems: number;
}

export const DashBoardSchema = SchemaFactory.createForClass(DashBoard);
