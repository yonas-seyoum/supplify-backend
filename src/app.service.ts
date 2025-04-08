import { Injectable } from '@nestjs/common';
import { ProductsService } from './products/products.service';
import { SuppliersService } from './suppliers/suppliers.service';
import { DashBoard } from './schema/dashboard.schema';

@Injectable()
export class AppService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly suppliersService: SuppliersService,
  ) {}

  async getDashboardData(): Promise<DashBoard> {
    const products = this.productsService.getProducts();

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
        total: 10,
      };
      lowStockItems.push(item);
    });

    const suppliers = this.suppliersService.getSuppliers();

    const activeSuppliers = (await suppliers).filter((supplier) => {
      return supplier.status === 'active';
    }).length;

    const dashboardData = {
      totalProducts,

      //needs to be integrated after sales api is integrated
      monthlySales: 10,
      salesOverview: {
        sales: {
          month: 'January',
          amount: 10,
        },
        totalSales: 562,
      },

      activeSuppliers,
      lowStockItems,
      totalNumberOfLowStockItems: lowStockItems.length,
    };

    return dashboardData;
  }
}
