import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DashBoardDocument = HydratedDocument<DashBoard>;

@Schema()
export class DashBoard {
  @Prop()
  totalProducts: number;

  @Prop()
  monthlySales: number;

  @Prop({ type: Object })
  salesOverview: {
    sales: {
      month: string;
      amount: number;
    };
    totalSales: number;
  };

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
