export class SalesDto {
  productId: string;
  item: string;
  customerName: string;
  date: Date;
  pricePerUnit: number;
  quantity: number;
  category: string;
}

export class SalesOverview {
  month: string;
  revenue: number;
  numberofSales: number;
}
