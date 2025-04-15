import { SalesOverview } from './sales/dto/sales.dto';

export class DashBoardDto {
  totalProducts: number;
  salesOverview: Array<SalesOverview>;
  activeSuppliers: number;
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
  totalNumberOfLowStockItems: number;
}
