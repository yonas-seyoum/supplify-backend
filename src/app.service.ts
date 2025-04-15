import { Injectable } from '@nestjs/common';
import { ProductsService } from './products/products.service';
import { SuppliersService } from './suppliers/suppliers.service';
import { DashBoard } from './schema/dashboard.schema';
import { SalesService } from './sales/sales.service';
import { SalesDto, SalesOverview } from './sales/dto/sales.dto';
import { Sales } from './schema/sales.schema';

@Injectable()
export class AppService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly suppliersService: SuppliersService,
    private readonly salesService: SalesService,
  ) {}

  getSalesOverview(sales: Sales[]): SalesOverview[] {
    let salesOverview: SalesOverview[] = [];
    sales.map((sale) => {
      const date = sale.date;

      if (date && !isNaN(new Date(date).getTime())) {
        const month = new Date(date).toLocaleString('default', { month: 'long' });
        salesOverview.push({ month, revenue: 10, numberofSales: 10 });
      } else {
        console.error('Invalid date:', date); // You can log invalid dates for debugging
        salesOverview.push({ month: 'Invalid', revenue: 0, numberofSales: 0 });
      }
    });
    return salesOverview;
  }

  async getDashboardData(): Promise<DashBoard> {
    const products = this.productsService.getProducts();
    const suppliers = this.suppliersService.getSuppliers();
    const sales = this.salesService.getSales();
    const salesOverview = this.getSalesOverview(await sales);

    const totalProducts = (await products).length;

    let lowStockItems: any = [];

    const filteredProducts = (await products).filter((product) => {
      return product.quantity < 15;
    });

    filteredProducts.forEach((filteredProduct) => {
      const item = {
        product: {
          name: filteredProduct.name,
          stockLevel: {
            available: filteredProduct.quantity,
            maximum: 50,
            status: 'Warning',
          },
        },
      };
      lowStockItems.push(item);
    });

    const activeSuppliers = (await suppliers).filter((supplier) => {
      return supplier.status === 'active';
    }).length;

    const dashboardData = {
      totalProducts,
      salesOverview,
      activeSuppliers,
      lowStockItems,
      totalNumberOfLowStockItems: lowStockItems.length,
    };

    return dashboardData;
  }
}
