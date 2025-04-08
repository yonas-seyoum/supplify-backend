export class DashBoardDto {
  totalProducts: number;
  monthlySales: number;
  salesOverview: {
    sales: {
      month: string;
      amount: number;
    };
    totalSales: number;
  };
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
