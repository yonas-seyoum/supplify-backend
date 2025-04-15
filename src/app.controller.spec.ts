import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashBoardDto } from './dashboard.dto';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  const mockDashboardData: DashBoardDto = {
    totalProducts: 50,
    monthlySales: 200,
    salesOverview: {
      sales: {
        month: 'April',
        amount: 15000,
      },
      totalSales: 50000,
    },
    activeSuppliers: 10,
    lowStockItems: [
      {
        product: {
          name: 'Item A',
          stockLevel: {
            available: 5,
            maximum: 100,
            status: 'Low',
          },
        },
      },
    ],
    totalNumberOfLowStockItems: 1,
  };

  const mockAppService = {
    getDashboardData: jest.fn().mockResolvedValue(mockDashboardData),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: mockAppService }],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  it('should return the correct dashboard data', async () => {
    const result = await appController.getHello();
    expect(result).toEqual(mockDashboardData);
    expect(appService.getDashboardData).toHaveBeenCalled();
  });
});

